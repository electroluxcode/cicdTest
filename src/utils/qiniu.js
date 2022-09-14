import { upload_qiniu } from "@/axios/data";
import {  Message } from 'element-ui';
import axios from "axios";
// 如果想把表单也输出的话，我们在upqiniu方法中 传参 加一个
// form变量即可
export function upqiniu(req) {
    console.log(req);

    const config = {
        headers: { "Content-Type": "multipart/form-data" },
    };
    let filetype = "";
    // if (req.file.type === "image/png") {
    //   filetype = "png";
    // } else {
    //   filetype = "jpg";
    // }
    // 重命名要上传的文件
    const keyname =
        "lytton" +
        new Date() +
        Math.floor(Math.random() * 100) +
        "." +
        filetype;
    // 从后端获取上传凭证token
    upload_qiniu()
        .then((res) => {
            console.log(res);
            const formdata = new FormData();
            // 点击提交按钮的时候用这个
            formdata.append("file", req);
            // 自动上传的时候用这个
            // formdata.append("file", req.file);
            formdata.append("token", res.data);
            formdata.append("key", keyname);


            // 获取到凭证之后再将文件上传到七牛云空间
            //上传地区 http://upload-z2.qiniup.com 和外链默认域名 rcwmwargy.hn-bkt.clouddn.com
            axios
                .post("http://upload-z2.qiniup.com", formdata, config)
                .then((res) => {
                    console.log("http://" + "rcwmwargy.hn-bkt.clouddn.com" + "/" + res.data.key)
                    // that.imageUrl = "http://" + "rcwmwargy.hn-bkt.clouddn.com" + "/" + res.data.key;
                    Message({
                        message: "上传成功",
                        type: "success",
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
}