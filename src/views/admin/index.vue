<template>
  <el-container>
    <el-main>
      <el-table :data="tableData" width="100%">
        <el-table-column label="商户ID" prop="fShopId" min-width="100"></el-table-column>
        <el-table-column label="商户名称" prop="fName" min-width="200"></el-table-column>
        <el-table-column label="商户IP" prop="fIp" min-width="200"></el-table-column>
        <el-table-column label="用户数" min-width="150">
          <template slot-scope="scope">
            <el-input type="number" v-model="scope.row.fUserNum" style="width:80px;"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="授权时间" width="500">
          <template slot-scope="scope">
            <el-date-picker
              v-model="scope.row.fBegDate"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
            <font>-</font>
            <el-date-picker
              v-model="scope.row.fEndDate"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </template>
        </el-table-column>
        <el-table-column label="类型" width="200">
          <template slot-scope="scope">
            <el-select v-model="scope.row.fSoftType" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button style="float:left;" type="text" @click.native.prevent="handleAuth(scope.$index, scope.row)" size="samll">授权</el-button>
            <el-button style="float:left;" type="text" @click.native.prevent="handleStartAndStop(scope.$index, scope.row)" size="samll">{{scope.row.fIsLogin}}</el-button>
            <el-button style="float:left;" type="text" @click.native.prevent="handleFunction(scope.$index, scope.row)" size="samll">功能列表</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="功能列表" width="40%" @close="handleClose" :visible.sync="funcDialog">
        <el-table :data="tableFunc" width="100%">
          <el-table-column label="模块序号" prop="fModuleId" width="200"></el-table-column>
          <el-table-column label="模块名称" prop="fName" width="300"></el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button type="text" @click.native.prevent="handleDelete(scope.$index, scope.row.fTypeId)" size="samll">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
import { setDelete, getData, setAuth, setIsLogin, getFunc } from '@/api/admin'
import { Message } from 'element-ui'
export default {
  name: 'admin',
  mounted: function() {
    this.handleData()
  },
  data() {
    return {
      tableData: [],
      tableFunc: [],
      options: [
        {
          value: 1,
          label: '餐饮'
        },
        {
          value: 2,
          label: '商城'
        },
        {
          value: 3,
          label: 'erp'
        },{
          value: 4,
          label: '自定义'
        }
      ],
      funcDialog: false
    }
  },
  methods: {
    handleDelete(i, typeid) {
      setDelete(typeid).then((res) => {
        if (res.code !== 0) {
          Message({
            message: '删除模块失败',
            type: 'error',
            duration: 2 * 1000
          })
          return
        }
        this.$delete(this.tableFunc, i)
      })
    },
    handleClose() {
      this.tableFunc = []
      this.funcDialog = false
    },
    handleAuth(index, row) {
      console.log(row)
      if (row.fBegDate && row.fEndDate && row.fSoftType) {
        console.log(row.fSoftType)
        setAuth(row.fShopId, row.fBegDate, row.fEndDate, row.fSoftType, row.fUserNum).then((res) => {
          if (res.code !== 0) {
            Message({
              message: '授权失败',
              type: 'error',
              duration: 2 * 1000
            })
            this.handleData()
            return
          }
          Message({
            message: '授权成功',
            type: 'success',
            duration: 2 * 1000
          })
        })
      } else {
        this.$message.error('必填日期和类型')
      }
    },
    handleStartAndStop(index, row) {
      var islogin = row.fIsLogin === '启用' ? 0 : 1
      setIsLogin(row.fShopId, islogin).then((res) => {
        if (res.code !== 0) {
          Message({
            message: '启停失败',
            type: 'error',
            duration: 2 * 1000
          })
          return
        }
        this.$set(this.tableData[index], 'fIsLogin', row.fIsLogin === '启用' ? '停用' : '启用')
        Message({
          message: '启停成功',
          type: 'success',
          duration: 2 * 1000
        })
      })
    },
    handleFunction(index, row) {
      console.log(row)
      getFunc(row.fShopId).then((res) => {
        if (res.code !== 0) {
          Message({
            message: '获取模块数据失败',
            type: 'error',
            duration: 2 * 1000
          })
          return
        }
        console.log(res)
        this.tableFunc = res.data
        this.funcDialog = true
      })
    },
    handleData() {
      getData().then((res) => {
        if (res.code !== 0) {
          Message({
            message: '获取商户数据失败',
            type: 'error',
            duration: 2 * 1000
          })
          return
        }
        this.tableData = res.data
      })
    }
  }
}
</script>
