<template>
  <div class="homeContent">
    <div id="fullpage">
      <div class="section Fi">
        <div class="container">
            <div id="canvas-header" class="large-header">
                <canvas id="canvas"></canvas>
              </div>
          <img id="beijing" src="../../assets/images/beijing.png" alt="">
          <div class="quark-img ">
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
      </div>
      <div class="section Sc">
        <div class="container" @mousemove="moveBall">
          <img id="beijing" src="../../assets/images/beijing.png" alt="">
          <div class="block-img">
            <img src="../../assets/images/Blockchain.png" alt="">
          </div>
          <div class="tech-img">
            <img src="../../assets/images/technicalservice.png" alt="">
          </div>
          <div class="ball-01 ball-words">
            <p>intelligent manufacturing</p>
          </div>
          <div class="ball-02 ball-words">
            <p> financial service</p>
          </div>
          <div class="ball-03 ball-words">
            <p>supply-chain finance(SCF)</p>
          </div>
          <div class="ball-04 ball-words">
            <p>IoT (Internet of Things)</p>
          </div>
          <div class="ball-05 ball-words">
            <p>social benefit</p>
          </div>
          <div class="ball-06 ball-words">
            <p>entertain-ment</p>
          </div>
          <div class="ball-07 ball-words">
            <p>medical treatment</p>
          </div>
          <div class="ball-08 ball-words">
            <p>educa-tion</p>
          </div>
          <div class="discription">
            <p>To develop original chain;To providing technical solutions to public chain, private chain and alliance chain;
              To developing all kinds of application scenarios based on block chain such as: the supply chain - bill financing,
              digital asset management, intelligent, block chain contracts exists, superconducting network, financial operation
              system, credit reporting system, integral system, estate, tourism, games, artificial intelligence etc.</p>
            <div class="button-arrow"></div>
          </div>
        </div>
      </div>
      <div class="section Th">
        <div class="container">
          <img id="beijing" src="../../assets/images/beijing.png" alt="">
          <div class="left-content">
            <div class="left-icon">
              <img src="../../assets/images/development.png" alt="">
              <img src="../../assets/images/Digitalexchange.png" alt="">
            </div>
          </div>
          <div class="right-content">
            <img src="../../assets/images/th-img.png" alt="">
            <div>
              <ul>
                <li>ADVANTAGES</li>
                <li>Comprehensive Functions</li>
                <li>Safety and Stability</li>
                <li>Live Data</li>
                <li>High Concurrency</li>
              </ul>
              <div class="discription">
                <p>To provide integrated platform system technology development services for centralized/decentralized digital
                  currency trading venues. System aiming at a series of process about the issue, the management, the trade
                  of digital currency , adopting the mainstream Java language in financial system during development, stable
                  and efficient system architecture with multiple encryption, is built to be a service - integrated trading
                  platform system</p>
                <div class="button-arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section Fo">
        <div class="container">
          <img id="beijing" src="../../assets/images/beijing.png" alt="">
          <div class="topic-icon">
            <img src="../../assets/images/lockchain.png" alt="">
            <img src="../../assets/images/TechnicalTraining.png" alt="">
          </div>
          <div class="topic-img">
            <img src="../../assets/images/topic-img.png" alt="">
            <div class="discription">
              <ul>
                <li>Technical Training</li>
                <li>Network Teaching</li>
                <li>Cooperative Training</li>
                <li>Scene Teaching</li>
                <li>Project Practice</li>
              </ul>
              <p>To train comprehensive basic block chain knowledge and technology ( bitcoin&Ethernet), the construction and
                development of block chain system, commercial application cases and to provide project practice.</p>
              <div class="button-arrow"></div>
            </div>
          </div>

        </div>
      </div>
      <div class="section Fiv">
        <div class="container">
          <img id="beijing" src="../../assets/images/beijing.png" alt="">
          <div class="title">
            <img src="../../assets/images/information.png" alt="">
          </div>
          <div class="infomation">
            <div class="left">
              <img src="../../assets/images/city.png" alt="">
              <p class="time">2017.6.12</p>
              <p class="Info-content">
                The revolution of the block chain has come. This is a great technological revolution. The traditional subversion will be
                more rapid and thorough than the Internet and the mobile Internet.
              </p>
              <img src="../../assets/images/line-down.png" alt="">
            </div>
            <div class="right">
              <img src="../../assets/images/line-up.png" alt="">
              <p class="time">2017.6.12</p>
              <p class="coin-content">
                The revolution of the block chain has come. This is a great technological revolution.
              </p>
              <img src="../../assets/images/coins.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="section Se">
        <div class="container">
          <img id="beijing" src="../../assets/images/beijing.png" alt="">
          <div class="contact">
            <img src="../../assets/images/Contact.png" alt="">
            <img src="../../assets/images/u.png" alt="">
            <img src="../../assets/images/six-logo.png" alt="">
            <div class="email">
              <p>E-MAIL:</p>
              <P>bussiness@quachain.com</P>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul id="myMenu">
      <li class="active">
        <span>01</span>
        <p></p>
      </li>
      <li>
        <span>02</span>
        <p></p>
      </li>
      <li>
        <span>03</span>
        <p></p>
      </li>
      <li>
        <span>04</span>
        <p></p>
      </li>
      <li>
        <span>05</span>
        <p></p>
      </li>
      <li>
        <span>06</span>
        <p></p>
      </li>
    </ul>
    <div id="link-number">
      <span class="right-arrow" @click="prePage"></span>
      <span class="middle-number">
        <img src="../../assets/images/liubianxing.png" alt="">
      </span>
      <span class="left-arrow" @click="nextPage"></span>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .container {
    margin: 0 auto;
    width: 1300px;
    height: 100%;
    position: relative;
    /* background: url("../../assets/images/beijing.png") no-repeat; */
  }

  #beijing {
    position: absolute;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: -1;

  }

  #fullpage {
    background-color: black;
    height: 100%;
    .Fi {
      position: relative;
      .quark-img {
        position: absolute;
        height: 58%;
        bottom: 24.3%;
        left: 38.5%;
        img {
          height: 100%;
        }
      }
      .chain-img {
        position: absolute;
        height: 58%;
        bottom: 41px;
        left: 50.6%;
        img {
          height: 100%;
        }
      }
      .manage-range {
        position: absolute;
        bottom: 10px;
        left: 890px;
        ul {
          li {
            font-family: HiraginoSansGBW3;
            line-height: 35px;
            font-size: 8px;
            opacity: 0.5;
            color: #ffffff;
            &:hover {
              font-size: 13px;
              opacity: 0.8;
            }
          }
        }
        .button {
          &:hover {
            background: url("../../assets/images/sspirit.png") 930px 923px;
          }
          margin-top: 42px;
          width: 70px;
          height: 70px;
          background: url("../../assets/images/sspirit.png") 1000px 923px;
        }
      }
    }
    .Sc {
      position: relative;
      .block-img {
        position: absolute;
        height: 58%;
        top: 13%;
        left: 344px;
        img {
          height: 100%;
        }
      }
      .tech-img {
        position: absolute;
        top: 23.8%;
        left: 434px;
        height: 47%;
        img {
          height: 100%;
        }
      }
      .ball-01 {
        position: absolute;
        left: 36%;
        top: 51.3%;
        width: 120px;
        height: 120px;
        background: url("../../assets/images/ball.png") 892px 140px;
      }
      .ball-02 {
        position: absolute;
        left: 44.3%;
        top: 36%;
        width: 80px;
        height: 80px;
        background: url("../../assets/images/ball.png") 750px 126px;
      }
      .ball-03 {
        position: absolute;
        left: 50%;
        top: 40.6%;
        width: 120px;
        height: 120px;
        background: url("../../assets/images/ball.png") 650px 140px;
      }
      .ball-04 {
        position: absolute;
        left: 51%;
        top: 60.5%;
        width: 90px;
        height: 90px;
        background: url("../../assets/images/ball.png") 511px 128px;
        p {
          width: 84px;
        }
      }
      .ball-05 {
        position: absolute;
        right: 35.2%;
        top: 65.6%;
        width: 60px;
        height: 60px;
        background: url("../../assets/images/ball.png") 390px 116px;
      }
      .ball-06 {
        position: absolute;
        right: 31.2%;
        top: 39.6%;
        width: 65px;
        height: 65px;
        background: url("../../assets/images/ball.png") 289px 116px;
        p {
          width: 65px;
        }
      }
      .ball-07 {
        position: absolute;
        right: 29%;
        top: 57.4%;
        width: 60px;
        height: 60px;
        background: url("../../assets/images/ball.png") 194px 114px;
      }
      .ball-08 {
        position: absolute;
        right: 23%;
        top: 47%;
        width: 40px;
        height: 40px;
        background: url("../../assets/images/ball.png") 106px 104px;
        p {
          width: 40px;
        }
      }
      .ball-words {
        p {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.3);
          font-size: 10px;
          font-family: HiraginoSansGBW3;
          text-align: center;
          word-wrap: break-word;
          line-height: 12px;
          &:hover {
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }
      .discription {
        width: 480px;
        position: absolute;
        top: 75%;
        left: 344px;
        p {
          line-height: 18px;
          width: 100%;
          color: #ffffff;
          opacity: 0.5;
          font-size: 10px;
          font-family: HiraginoSansGBW3;
          &:hover {
            opacity: 0.8;
          }
        }
        .button-arrow {
          margin-top: 42px;
          width: 70px;
          height: 70px;
          background: url("../../assets/images/sspirit.png") 1000px 923px;
          &:hover {
            background: url("../../assets/images/sspirit.png") 930px 923px;
          }
        }
      }
      .link-line {
        top: 435px;
      }
    }
    .Th {
      .left-content {
        width: 40%;
        .left-icon {
          margin-top: 200px;
          float: right;
          img {
            &:first-of-type {
              vertical-align: none;
            }
            &:last-of-type {
              margin-left: 40px;
            }
          }
        }
      }
      .right-content {
        img {
          margin-top: 235px;
          margin-left: 30px;
        }
        >div {
          margin-left: 86px;
          ul {
            margin-top: 54px;
            li {
              color: #ffffff;
              font-family: HiraginoSansGBW3;
              margin-bottom: 30px;
              font-size: 8px;
              opacity: 0.7;
              &:first-of-type {
                font-size: 13px;
              }
              &:hover {
                font-size: 13px;
                opacity: 1;
              }
            }
          }
          .discription {
            width: 600px;
            p {
              line-height: 18px;
              width: 100%;
              color: #ffffff;
              opacity: 0.5;
              font-size: 10px;
              font-family: HiraginoSansGBW3;
              &:hover {
                opacity: 0.8;
              }
            }
            .button-arrow {
              margin-top: 42px;
              width: 70px;
              height: 70px;
              background: url("../../assets/images/sspirit.png") 1000px 923px;
              &:hover {
                background: url("../../assets/images/sspirit.png") 930px 923px;
              }
            }
          }
        }
      }

    }
    .Fo {
      .topic-icon {
        position: absolute;
        top: 40%;
        left: 53%;
        
        transform: translateY(50%) translateX(-50%);
        z-index: 999;
        img {

          display: block;
          margin-bottom: 30px;
        }
      }
      .topic-img {
        position: absolute;
        top: 37%;
        left: 106px;
        height: 41%;
        display: flex;
        img {
          height: 100%;
          &:hover {
            transform: scale(1.05);
          }
        }
        .discription {
          margin-top: 270px;
          margin-left: 50px;
          width: 600px;
          ul {
            display: flex;
            flex-wrap: wrap;
            li {
              margin-right: 36px;
              color: #ffffff;
              line-height: 24px;
              font-size: 10px;
              opacity: 0.5;
              font-family: HiraginoSansGBW3;
              &:hover {
                font-size: 13px;
                opacity: 1;
              }
            }
          }
          p {
            margin-top: 30px;
            width: 500px;
            line-height: 18px;
            width: 100%;
            color: #ffffff;
            opacity: 0.5;
            font-size: 10px;
            font-family: HiraginoSansGBW3;
            &:hover {
              opacity: 1;
            }
          }
          .button-arrow {
            margin-top: 42px;
            width: 70px;
            height: 70px;
            background: url("../../assets/images/sspirit.png") 1000px 923px;
            &:hover {
              background: url("../../assets/images/sspirit.png") 930px 923px;
            }
          }
        }
      }
    }
    .Fiv {
      .title {
        position: absolute;
        top: 27%;
        left: 266px;
      }
      .infomation {
        position: relative;
        display: flex;
        height: 100%;
        .left {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          img {
            margin-right: 114px;
            &:first-of-type {
              margin-top: 394px;
            }
            &:last-of-type {
              margin-top: 20px;
            }
          }
          .time {
            width: 267px;
            font-size: 10px;
            color: #fff;
            opacity: 0.5;
            font-family: HiraginoSansGBW3;
            margin: 24px 114px 20px 0;
          }
          .Info-content {
            color: #fff;
            opacity: 0.5;
            font-family: HiraginoSansGBW3;
            margin-right: 114px;
            width: 267px;
          }
        }
        .right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          img {
            &:first-of-type {
              margin-top: 55px;
            }
            &:last-of-type {
              margin-top: 20px;
            }
          }
          p {
            &:first-of-type {
              width: 267px;
              font-size: 10px;
              color: #fff;
              opacity: 0.5;
              font-family: HiraginoSansGBW3;
              margin: 24px 0 20px 0;
            }
            &:last-of-type {
              color: #fff;
              opacity: 0.5;
              font-family: HiraginoSansGBW3;
              width: 267px;
            }
          }
        }
      }
    }
    .Se {
      .contact {
        position: absolute;
        top: 31.8%;
        left: 31%;
        width: 31%;
        height: 100%;
        img {
          display: block;
          &:nth-of-type(1) {
           height: 3.9%
          }
          &:nth-of-type(2) {
            height: 8.6%;
            margin: 3.9% 0 8.6% 0;
          }
          &:nth-of-type(3) {
           height: 11%
          }
        }
        .email {
          margin-top: 64px;
          p {
            &:first-of-type {
              font-size: 10px;
              color: #fff;
              opacity: 0.5;
              font-family: HiraginoSansGBW3;
              line-height: 22px;
            }
            &:last-of-type {
              font-size: 21px;
              color: #fff;
              font-family: HiraginoSansGBW6;
            }
          }
        }
      }
    }
  }

  #myMenu {
    position: fixed;
    z-index: 999;
    top: 250px;
    right: 20px;
    height: 600px;
    width: 30px;
    li {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      opacity: 0.2;
      &.active {
        opacity: 1;
      }
      span {
        font-family: HiraginoSansGBW3;
        margin-right: 10px;
        line-height: 35px;
        font-size: 8px;
        opacity: 0.5;
        color: #ffffff;
      }
      p {
        display: inline-block;
        height: 66px;
        width: 3px;
        background-color: #2c61ad;
      }
    }
  }

  #link-number {
    position: fixed;
    top: 50%;
    left: 5%;
    height: 80px;
    width: 150px;
    z-index: 999;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .right-arrow {
      width: 20px;
      height: 20px;
      background: url("../../assets/images/sspirit.png") 97px 907px;
      cursor: pointer;
    }
    .middle-number {
      text-align: center;
      width: 100px;
      height: 100px;
      background: url("../../assets/images/sspirit.png") 830px 944px;
      img {
        animation: LBX 5s infinite linear;
      }
    }
    .left-arrow {
      cursor: pointer;
      width: 20px;
      height: 20px;
      background: url("../../assets/images/sspirit.png") 60px 907px;
    }
  }

  @keyframes LBX {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes scaleContain {
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

</style>

<script>
  import "../../assets/lib/fullpage/jquery.fullpage.min.js";
  import "../../assets/js/TweenLite.min.js";
  import "../../assets/js/EasePack.min.js";
  import canvasStart from "../../assets/js/demo-1";
  export default {
    mounted() {
      this.fullpage();
      canvasStart.canvasStar()
    },
    beforeDestroy() {
      $.fn.fullpage.destroy("all");
    },
    methods: {
      fullpage() {
        $("#fullpage").fullpage({
          afterLoad: function (anchorLink, index) {
            if (index == 1) {
              $(".quark-img").addClass("animated slideInDown");
              $(".chain-img").addClass("animated slideInUp");
              $(".manage-range").addClass("animated lightSpeedIn");
            }
            if (index == 2) {
              $(".middle-number").css({
                background: 'url("../../assets/images/sspirit.png") 720px 944px'
              });
              $(".tech-img,.block-img").addClass("animated bounceInLeft");
              $(
                ".ball-01,.ball-02,.ball-03,.ball-04,.ball-05,.ball-06,.ball-07,.ball-08"
              ).addClass("animated zoomIn");
            }
          },
          onLeave: function (index, direction) {
            if (index == 1) {
              $(".quark-img").removeClass("animated slideInDown");
              $(".chain-img").removeClass("animated slideInUp");
              $(".manage-range").removeClass("animated lightSpeedIn");
            }
            if (index == 2) {
              $(".tech-img,.block-img").removeClass("animated bounceInLeft");
              $(
                ".ball-01,.ball-02,.ball-03,.ball-04,.ball-05,.ball-06,.ball-07,.ball-08"
              ).removeClass("animated zoomIn");
            }
          }
        });
      },
      moveBall(e) {
        const moveX =
          ($(window).width() / 2 - e.clientX) / $(window).width() * 100;
        const moveY =
          ($(window).height() / 2 - e.clientY) / $(window).height() * 20;
      },
      prePage() {
        $.fn.fullpage.moveSectionUp();
      },
      nextPage() {
        $.fn.fullpage.moveSectionDown();
      }
    }
  };

</script>
