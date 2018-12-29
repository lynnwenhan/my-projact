<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">资产编码: </span>
                <span class="expand-value">{{ row.job }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">IP地址: </span>
                <span class="expand-value">{{ row.interest }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">MAC地址: </span>
                <span class="expand-value">{{ row.birthday }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">OSD名称: </span>
                <span class="expand-value">{{ row.book }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">国际编码: </span>
                <span class="expand-value">{{ row.movie }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">备注信息: </span>
                <span class="expand-value">{{ row.music }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    };
</script>