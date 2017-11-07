(function ($,$$) {
  $.init();
  $.ready(function () {
    //引导页点击功能
    (function () {
      var againKnow = document.getElementsByClassName("againKnow")[0];
      var num = 2;
      againKnow.addEventListener("tap", function () {
        $$(".guideBox").hide();
        $$(".guideBox" + num).show();//显示引导
        num++;
        //判断开头结尾的遮罩层显示隐藏
        if (num >= 4 && num <= 6) {
          $('#offCanvasContentScroll').scroll().scrollTo(0, -160, 500);
          $$(".headerMask,.footerMask").show();//显示尾部遮罩
        } else {
          $$(".footerMask").hide();
        }
        if (num >= 8) {
          //改变按钮为我知道了
          $$(".againKnow").css({backgroundImage: "url(images/b008.png)"});
        }
        if (num >= 9) {
          $('#offCanvasContentScroll').scroll().scrollTo(0, 0, 500);
          //我知道了消失
          $$(this).hide();
          $$(".headerMask").fadeOut();//头部遮罩消失
          $$(".pageFlap").fadeOut();//挡板消失
        }
      });
    })();
    funGather();
    //功能集合
    function funGather() {
      //点击其他地方让input失去焦点
      document.addEventListener("tap",function(){
        $$("input[type='text']").blur();
      });
      //主页发布跳转
      $(".advertising").on("tap", ".issue", function () {
        window.location.href = "advertising.html";
      });
      //主页转发弹窗动画
      $$(".popMisson").animate({
        top: "15%"
      }, 1000);

      //轮播图放大
      $(".swiper-slide").on("tap", "img", function () {
        $$(this).clone().appendTo(".clickLarge");
        $$(".clickLarge").fadeIn();
      });
      //轮播图消失
      var bigSwiper = document.getElementsByClassName("clickLarge")[0];
      bigSwiper.addEventListener("tap", function () {
        $$(this).fadeOut();
      });

      //抢钱功能
      $(".footerMain").on("tap", ".bigBox", function () {
        if ($$(this).text() == "抢钱") {
          alert("抢钱");
        } else if ($$(this).text() == "刷新") {
          alert("刷新");
        }
      });

      //点击查看二维码
      var codeBtn = document.getElementsByClassName("code")[0];
      var codeGuan = document.getElementById("saveCode");
      codeBtn.addEventListener("tap", function () {
        $$(".zzz").show().children("#saveCode").show();
      });

      //点击关闭按钮关闭二维码
      codeGuan.addEventListener("tap", function () {
        $$(this).parents(".zzz").hide();
      });

      //点赞功能
      var clickZan = document.getElementsByClassName("clickZan")[0];
      clickZan.addEventListener("tap", function () {
        $$(this).children("i").css({backgroundImage: "url('images/icon15(1).png')"})
      });

      //主页页脚菜单按钮
      $$(".menuBox").on('click', function () {
        $$(".subMenubtn").toggleClass("hide");
      });

      //打开菜单按钮打开详情窗口
      $(".menuGrid").on('tap', 'a', function () {
        var menuId = $$(this).attr("href");
        var bgImg = menuId.slice(1);
        $$("#menuGrid").hide();//九宫格菜单隐藏
        $$(".personCenter").addClass("subPage");//个人信息隐藏类
        $$(".menuBread").css({display: "inline-block", backgroundImage: "url(images/" + bgImg + ".png)"});//小图标显示
        $$(menuId).show();
      }, false);

      //点击会员等级、我的好友、活跃度跳转
      $(".personCenter").on("tap", "a", function () {
        var menuId = $$(this).attr("href");
        if(menuId == "#liveness"){
          return;
        }
        $$(".personCenter").removeClass("subPage");//个人信息隐藏类
        $$("#menuGrid").hide();//九宫格菜单隐藏
        if (menuId == "#memberbuy") {
          $$(".personCenter").addClass("subPage");//个人信息隐藏类
        }
        $$(menuId).show().siblings(".closeBtn").hide();
      });

      //点击close按钮关闭详情窗口
      $(".closeBtn").on("tap", ".close", function () {
        $$(this).parent().hide();
        $$("#menuGrid").show();//九宫格菜单显示
        $$(".personCenter").removeClass("subPage");//个人信息隐藏类
        $$(".menuBread").css({display: "none"});//小图标隐藏
      });

      //充值页面金额按钮
      $(".money").on("tap", "li", function () {
        $$(this).addClass("active").siblings().removeClass("active");
        if ($$(this).html() == "其他") {
          $$(".modal").show();
        }
        $$(this).html().slice(0, -1);
      });
      $("#recharge").on("tap", ".modal>i", function () {
        $$(this).parent().hide();
      });

      //已发任务标签页切换
      $(".mission").on("tap", "a", function () {
        var missionId = $$(this).attr("href");
        $$(this).addClass("active").siblings().removeClass("active");
        $$(missionId).show().siblings().hide();
      });
    }
  });
})(mui,jQuery);

//所有的图表：柱状图 雷达图 饼状图 圆形进度条
bar();
radar();
pie();
progress();
//柱状图
function bar() {
  var mychart = echarts.init(document.getElementById('barCom'));
  var xAxisData = ['分享', '任务', '加粉', '加好友'];
  var data = [80, 60, 40, 55];
  var maxData = 100;
  var option = {
    legend: {
      top: 0,
      width: 250,
      height: 266
    },
    xAxis: [{
      data: xAxisData,
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      //坐标轴相关设置
      axisLine: {
        show: true,
        lineStyle: {
          color: '#ec3c00',
          width: 5
        }
      },
      //坐标轴刻度设置
      axisTick: {
        show: false
      },
      boundaryGap: ['50%', '50%']
    }, {
      // 辅助 x 轴
      show: true,
      data: data,
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      //坐标轴刻度设置
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    }],
    yAxis: {
      max: 100,
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    grid: {
      containLabel: true
    },
    series: [{
      // 辅助系列
      type: 'bar',
      silent: true,
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: '#b7b7b7'
        }
      },
      barWidth: 10,
      data: data.map(function (val) {
        return 100;
      })
    }, {
      type: 'bar',
      data: data,
      barWidth: 10,
      itemStyle: {
        normal: {
          color: '#ec3c00',
          shadowColor: 'rgba(0, 0, 0, 0.4)',
          shadowBlur: 10,
          formatter: '{c}%'
        }
      }
    }]
  };
  mychart.setOption(option);
}
//雷达图
function radar() {
  //判断手机屏幕大小配置图形的大小
  var radarRadius;//雷达图半径
  var topDistance;
  var width = $(window).width();
  if (width >= 360) {
    radarRadius = 70;
    topDistance = "50%";
  } else if(width >= 320) {
    radarRadius = 55;
    topDistance = "40%";
  }  else {
    radarRadius = 50;
    topDistance = "40%";
  }
  var mychart = echarts.init(document.getElementById('radarCom'));
  var option = {
    width: 'auto',
    tooltip: {},
    radar: {
      indicator: [{
        name: '阅读量',
        max: 100
      }, {
        name: '评论次数',
        max: 100
      }, {
        name: '点赞次数',
        max: 100
      }, {
        name: '转发次数',
        max: 100
      }, {
        name: '任务图',
        max: 100
      }],
      center: ['50%', topDistance],
      radius: radarRadius
    },
    legend: {
      width: 'auto',
      height: 'auto'
    },
    series: [{
      name: '任务数据',
      type: 'radar',
      data: [{
        value: [70, 90, 60, 85, 66],
        name: '任务数据'
      }],
      itemStyle: {
        normal: {
          color: '#ec3c00'
        }
      }
    }]
  };
  mychart.setOption(option);
}
//饼图
function pie() {
  var radiusPis;//饼图半径
  var width = $(window).width();
  if (width >= 360) {
    radiusPis = 80;
  } else if(width >= 320) {
    radiusPis = 75;
  }  else {
    radiusPis = 75;
  }
  var mychart = echarts.init(document.getElementById('carCom'));
  var option = {
    series: [
      {
        name: '工会成员',
        type: 'pie',
        center: ['50%', '50%'],
        radius: radiusPis,
        color: ['#b3b3b3', '#a6a6a6','#999'],
        itemStyle: {
          normal: {
            label: {
              position: 'inner',
              formatter: function (params) {
                return params.name + '\n' + (params.percent - 0).toFixed(0) + '%'
              }
            },
            labelLine: {
              show: false
            }
          }
        },
        data: [
          {value: 335, name: '二维码分享'},
          {value: 679, name: '转发'},
          {value: 1548, name: '好友'}
        ]
      }
    ],
    textStyle:{
      color:"#fff"
    }
  };
  mychart.setOption(option);
}
//圆形进度条
function progress() {
  //判断手机屏幕大小配置图形的大小
  var circleSize;
  var width = $(window).width();
  if (width >= 360) {
    circleSize = 100;
  } else if(width >= 320) {
    circleSize = 85;
  }  else {
    circleSize = 75;
  }
  $('#circle1').circleProgress({
    value: 0.5,
    size: circleSize,//canvas大小
    startAngle: Math.PI * 3 / 2,//起始度数
    thickness: 13,//进度条的宽度
    lineCap: "round",//线头样式
    emptyFill: "#8f9092",
    fill: {
      gradient: ["#ec3c00", "#fdb9a1"],//渐变颜色
      gradientAngle: Math.PI * 3 / 2
    }
  });
  $('#circle2').circleProgress({
    value: 0.6,
    size: circleSize,//canvas大小
    startAngle: Math.PI * 3 / 2,//起始度数
    thickness: 13,//进度条的宽度
    lineCap: "round",//线头样式
    emptyFill: "#8f9092",
    fill: {
      gradient: ["#ec3c00", "#fdb9a1"],//渐变颜色
      gradientAngle: Math.PI * 3 / 2
    }
  });
  $('#circle3').circleProgress({
    value: 0.8,
    size: circleSize,//canvas大小
    startAngle: Math.PI * 3 / 2,//起始度数
    thickness: 13,//进度条的宽度
    lineCap: "round",//线头样式
    emptyFill: "#8f9092",
    fill: {
      gradient: ["#ec3c00", "#fdb9a1"],//渐变颜色
      gradientAngle: Math.PI * 3 / 2
    }
  });
}
