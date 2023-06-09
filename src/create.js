const symbol = require('log-symbols');
const chalk = require('chalk');
const ora = require('ora');

const {
  notExistFold,
  prompt,
  downloadTemplate,
} = require('./util.js');

let create = async (ProjectName) => {

  // 项目名不能为空
  if (ProjectName === undefined) {
    console.log(symbol.error, chalk.red('创建项目的时候，请输入项目名'));
  } else {
    notExistFold(ProjectName).then(() => {
      prompt().then((answer) => {
        console.log('answer:', answer)

        /**
         * 根据用户输入的配置信息下载模版&更新模版配置
         */
        let loading = ora('模板下载中...');
        loading.start('模板下载中...');

        downloadTemplate(ProjectName, answer.frame)
          .then(() => {
            loading.succeed('模板下载完成');
            // console.log('模板下载完成process.cwd()', process.cwd())
            // answer.rename && fs.renameSync()
            // answer.git
          });
      })
    });
  }
};

module.exports = create;