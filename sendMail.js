const nodemailer = require("nodemailer");

// 使用async..await 创建执行函数
async function main() {
  // 如果你没有一个真实邮箱的话可以使用该方法创建一个测试邮箱
  let testAccount = await nodemailer.createTestAccount();

  // 创建Nodemailer传输器 SMTP 或者 其他 运输机制
  let transporter = nodemailer.createTransport({
    //host: "smtp.ethereal.email", // 第三方邮箱的主机地址
    service: "qq", //使用了内置传输发送邮件
    port: 465, //SMTP 端口
    secureConnection: true, //使用了 SSL
    auth: {
      user: "294104561@qq.com",
      //这里密码不是qq密码， 是你设置的smtp授权码
      pass: "zpdf0teyhjfbpcaff",
    },
  });

  function sendMail(message) {
    // 定义transport对象并发送邮件
    let mailOptions = {
      from: '"lethestories" <294104561@qq.com>', // 发送方邮箱的账号
      to: "294104561@qq.com", // 邮箱接受者的账号
      subject: "部署通知", // Subject line
      html: message, // html 内容, 如果设置了html内容, 将忽略text内容
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
    });
  }
}
module.exports = sendMail;
