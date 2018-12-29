<style scope>
.time {
  font-size: 14px;
  font-weight: bold;
}
.content {
  padding-left: 5px;
  margin-top: 5px; 
}
.cardBox1 .ivu-card-head {
  background-color: #4f8dda;
}
.card_header_p {
  color: white !important;
  font-size: 18px !important;
}
.bgcard .ivu-card-head{
   padding: 8px 16px;
}
.bgcard .ivu-card-extra{
  top: 9px;
  color: aliceblue;
}
.bgcard p{
  color: #ffffff;
}
.bgcard a{
   color: #ffffff;
}
.bgcard .ivu-card-body{
  padding: 0;
}
.bgcard ul{
  overflow: hidden;
  padding: 10px 0;
}
.bgcard ul li{
  list-style: none;
  width: 50%;
  float: left;
  height: 30px;
  line-height:30px;
  border-right: solid 1px #dadada;
  text-align: center;
}
</style>
<template>
  <Row>
    <Col class="cardBox1">
      <Card dis-hover>
        <!-- <p slot="title" class="card_header_p">变更记录</p> -->
        <p>
          <Timeline>
            <TimelineItem>
              <p class="time">2018-10-10</p>
              <p class="content">
                <Col>
                  <Card dis-hover class="bgcard">
                    <p slot="title">
                      <Icon type="grid"></Icon> 规格
                    </p>
                    <a href="#" slot="extra">
                      <Icon type="ios-calendar-outline"></Icon>  2018-10-10
                    </a>
                    <ul>
                       <li>变更前：DS-CA-400DR</li>
                       <li style="border-right:none;">变更后：DS-CA-400DR</li>     
                    </ul>
                  </Card>
                </Col>
              </p>
            </TimelineItem>
            <TimelineItem>
              <p class="time">2018-11-13</p>
              <p class="content">
                <Col>
                  <Card dis-hover class="bgcard">
                    <p slot="title">
                      <Icon type="grid"></Icon> 型号
                    </p>
                    <a href="#" slot="extra">
                      <Icon type="ios-calendar-outline"></Icon>  2018-11-13
                    </a>
                    <ul>
                       <li>变更前：DS-CA-400DR</li>
                       <li style="border-right:none;">变更后：DS-CA-400DR</li>     
                    </ul>
                  </Card>
                </Col>
              </p>
            </TimelineItem>
            <TimelineItem>
              <p class="time">2018-10-10</p>
              <p class="content">
                <Col>
                  <Card dis-hover class="bgcard">
                    <p slot="title">
                      <Icon type="grid"></Icon> 资产编码
                    </p>
                    <a href="#" slot="extra">
                      <Icon type="ios-calendar-outline"></Icon>  2018-12-13
                    </a>
                    <ul>
                       <li>变更前：黑光球机</li>
                       <li style="border-right:none;">变更后：400万微卡口</li>     
                    </ul>
                  </Card>
                </Col>
              </p>
            </TimelineItem>
          </Timeline>
        </p>
      </Card>
    </Col>
  </Row>
</template>
<script>
export default {
  name: "vrecode",
  data() {
    return {};
  }
};
</script>
