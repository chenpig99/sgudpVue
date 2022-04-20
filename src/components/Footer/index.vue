<template>
  <div class="footer">
    <div class="footer-container">
      <div class="copyright">
        <!-- <ul class="helpLink">
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>联系我们</li>
        </ul> -->
        <p>地址：韶关学院</p>
        <p>@copyright 本网站的版权的最终拥有权归网站开发者所持有。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="less">
.footer {
  display: flex;
  margin-top: 0px;
  background-color: #eaeaea;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 1px;

    .copyright {
      padding: 1px;

      .helpLink {
        text-align: center;

        li {
          display: inline;

          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 1px;
            background: #666;
            margin: 4px 0px 2px 2px;
          }
        }
      }

      p {
        margin: 2px 0;
        text-align: center;
      }
    }
  }
}
</style>
