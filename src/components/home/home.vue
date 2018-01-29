<template>
  <div>
    <div id="fullpage">
      <div class="section one">
        <div class="link-number">
          <span class="right-arrow"></span>
          <span class="middle-number"></span>
          <span class="left-arrow"></span>
        </div>
        <div class="quark-img">
          <img src="../../assets/images/quark.png" alt="">
        </div>
        <div class="chain-img">
          <img src="../../assets/images/chain.png" alt="">
        </div>
        <div class="manage-range">
          <ul>
            <li> professional service</li>
            <li> digital exchange development</li>
            <li> block chain technical training</li>
            <li> professional block chain solution provider</li>
          </ul>
          <div class="button"></div>
        </div>
      </div>
      <div class="section two">
        <div class="quark-img">
          <img src="../../assets/images/Blockchain.png" alt="">
        </div>
        <div class="tech-img">
          <img src="../../assets/images/technicalservice.png" alt="">
        </div>
        <div class="ball-01 ball-words">
          Intelligent Manufacturing
        </div>
        <div class="ball-02 ball-words">
          Financial Service
        </div>
        <div class="ball-03 ball-words">
          Supply-Chain Finance(SCF)
        </div>
        <div class="ball-04 ball-words">
          IoT (Internet of Things)
        </div>
        <div class="ball-05 ball-words">
          Social Benefit
        </div>
        <div class="ball-06 ball-words">
          Entertainment
        </div>
        <div class="ball-07 ball-words">
          Medical treatment
        </div>
        <div class="ball-08 ball-words">
          Education
        </div>
        <div class="discription">
          <p>To develop original chain;To providing technical solutions to public chain, private chain and alliance chain; To developing all kinds of application scenarios based on block chain such as: the supply chain - bill financing, digital asset management, intelligent, block chain contracts exists, superconducting network, financial operation system, credit reporting system, integral system, estate, tourism, games, artificial intelligence etc.</p>
          <div class="button-arrow"></div>
        </div>
      </div>
      <div class="section">
        <h3>第三屏</h3>
      </div>
      <div class="section">
        <h3>第四屏</h3>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#fullpage {
  .one {
    position: relative;
    background: url("../../assets/images/beijing.png") no-repeat;
    background-size: cover;
    .quark-img {
      position: absolute;
      top: 164px;
      left: 830px;
    }
    .chain-img {
      position: absolute;
      top: 372px;
      left: 988px;
    }
    .manage-range {
      position: absolute;
      top: 709px;
      left: 1220px;
      ul {
        li {
          font-family: HiraginoSansGBW3;
          line-height: 35px;
          font-size: 8px;
          opacity: 0.5;
          color: #ffffff;
        }
      }
      .button {
        margin-top: 42px;
        width: 70px;
        height: 70px;
        background: url("../../assets/images/sspirit.png") 1000px 918px;
      }
    }
  }
  .two {
    position: relative;
    background: url("../../assets/images/beijing.png") no-repeat;
    background-size: cover;
    .quark-img {
      position: absolute;
      top: 126px;
      left: 674px;
    }
    .tech-img {
      position: absolute;
      top: 232px;
      left: 754px;
    }
    .ball-01 {
      position: absolute;
      left: 800px;
      bottom: 320px;
      width: 120px;
      height: 120px;
      background: url("../../assets/images/ball.png") 898px 140px;
    }
    .ball-02 {
      position: absolute;
      left: 906px;
      top: 430px;
      width: 80px;
      height: 80px;
      background: url("../../assets/images/ball.png") 750px 126px;
    }
    .ball-03 {
      position: absolute;
      left: 980px;
      top: 474px;
      width: 120px;
      height: 120px;
      background: url("../../assets/images/ball.png") 650px 140px;
    }
    .ball-04 {
      position: absolute;
      left: 992px;
      top: 620px;
      width: 90px;
      height: 90px;
      background: url("../../assets/images/ball.png") 511px 128px;
    }
    .ball-05 {
      position: absolute;
      right: 768px;
      top: 640px;
      width: 60px;
      height: 60px;
      background: url("../../assets/images/ball.png") 390px 116px;
    }
    .ball-06 {
      position: absolute;
      right: 716px;
      top: 386px;
      width: 80px;
      height: 80px;
      background: url("../../assets/images/ball.png") 289px 126px;
    }
    .ball-07 {
      position: absolute;
      right: 688px;
      top: 560px;
      width: 60px;
      height: 60px;
      background: url("../../assets/images/ball.png") 194px 114px;
    }
    .ball-08 {
      position: absolute;
      right: 610px;
      top: 504px;
      width: 40px;
      height: 40px;
      background: url("../../assets/images/ball.png") 106px 104px;
    }
    .ball-words{
      text-align: center;
      word-wrap: wrap;
    }
    .discription {
      width: 480px;
      position: absolute;
      top: 733px;
      left: 674px;
      .button-arrow {
        margin-top: 42px;
        width: 70px;
        height: 70px;
        background: url("../../assets/images/sspirit.png") 1000px 918px;
      }
    }
  }
  .link-number {
    position: fixed;
    top: 472px;
    left: 170px;
    height: 80px;
    width: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .right-arrow {
      width: 20px;
      height: 20px;
      background: url("../../assets/images/sspirit.png") 100px 902px;
    }
    .middle-number {
      width: 100px;
      height: 100px;
      background: url("../../assets/images/sspirit.png") 296px 940px;
    }
    .left-arrow {
      width: 20px;
      height: 20px;
      background: url("../../assets/images/sspirit.png") 60px 902px;
    }
  }
  #fp-nav {
    ul {
      li {
        a {
          &.active {
            span {
              border-radius: none;
              background: none;
            }
          }
          span {
            border-radius: none;
            background: none;
          }
        }
      }
    }
  }
}
</style>

<script>
import "../../assets/lib/fullpage/jquery.fullpage.min.js";
export default {
  mounted() {
    this.fullpage();
  },
  beforeDestroy() {
    $.fn.fullpage.destroy("all");
  },
  methods: {
    fullpage() {
      $("#fullpage").fullpage({
        navigation: true,
        navigationColor: "#2A61AD"
      });
    }
  }
};
</script>
