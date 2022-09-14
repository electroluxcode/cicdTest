<template>
  <el-main class="main">
    <el-form :model="form" label-width="80px">
      <el-form-item label="资源标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.autor"></el-input>
      </el-form-item>

      <el-form-item label="时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="内容简介">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="form.region" placeholder="请选择资源类型">
          <el-option label="游戏" value="1"></el-option>
          <el-option label="学习" value="2"></el-option>
        </el-select>
      </el-form-item>

      <!-- <div class="upload">
        <el-upload
          class="avatar-uploader"
          :action="domain"
          :http-request="upqiniu"
          :auto-upload="true"
          :show-file-list="true"
          :before-upload="beforeUpload"
          :on-preview="handlePreview"
          :on-change="fileChange"
          :file-list="fileList"
          :limit="1"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div> -->

      <el-upload
        class="avatar-uploader"
        :action="domain"
        :http-request="upqiniu"
        :auto-upload="false"
        :show-file-list="true"
        :before-upload="beforeUpload"
        :on-preview="handlePreview"
        :on-change="fileChange"
        :file-list="fileList"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <el-form-item style="margin-top: 3%; margin-left: 0%; text-align: center">
        <el-button type="primary" @click="submitUpload()">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
import { upqiniu } from "@/utils/qiniu";


export default {
  data() {
    return {
      fileList: [],
      scope: [],
      form: {
        name: "",
        region: "",
        date1: "",
        autor: "",
        resource: "",
        desc: "",
        com: "",
      },
      imageUrl: "",
      token: {},
      // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
      domain: "http://upload-z2.qiniup.com",
      // 这是七牛云空间的外链默认域名
      qiniuaddr: "rcwmwargy.hn-bkt.clouddn.com",
      file: null,
    };
  },
  mounted() {
    /*if (!localStorage.getItem("username")) {
      this.$message({
        type: "warning",
        message: "你还没有登录",
        duration: 1500,
      });
      this.$message({
        type: "warning",
        message: "你还没有登录",
        duration: 1500,
      });
      this.$message({
        type: "warning",
        message: "你还没有登录",
        duration: 1500,
      });
      this.$router.push({
        path: "/home",
      });
    }*/
    //console.log(localStorage.getItem("username"));
    /* this.$axios
      .get(
        "api/api/schoolrule/info1?username=" +
          localStorage.getItem("username") +
          "&rid=2"
      )
      .then((response) => {
        console.log(response.data.data.user_level);
        this.tableData = response.data.data.user_level;
      }); */
  },
  methods: {
    handlePreview(file) {
      console.log(file);
    },
    fileChange(file) {
      this.fileList.push(file.raw);
      localStorage.setItem("file", this.fileList);
      this.file = file.raw;
      console.log(this.fileList);
    },
    submitUpload() {
      upqiniu(this.file);
    },
    
    // 验证文件合法性
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  
   
  },
};
</script>



<style scoped>

.el-container {
  height: 100%;
}

</style>






