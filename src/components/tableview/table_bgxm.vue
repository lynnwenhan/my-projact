/* 变更项目 */
<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="12">
                <span class="expand-key">变更前: </span>
                <span class="expand-value">{{ row.job }}</span>
            </Col>
            <Col span="12">
                <span class="expand-key">变更后: </span>
                <span class="expand-value">{{ row.interest }}</span>
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