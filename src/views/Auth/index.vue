<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img
        class="logo"
        src="https://ncstatic.clewm.net/rsrc/2020/1016/02/4757e4910cb527fc040d019a93ded74f.png?x-oss-process=image/resize,w_750/format,gif/sharpen,100/quality,Q_80/interlace,1/auto-orient,1"
        alt=""
      />
      <div class="title">图书管理系统 后台</div>
    </div>
    <div class="form">
      <a-tabs>
        <a-tab-pane key="1" tab="登录">
          <div class="item">
            <a-input size="large" placeholder="账户">
              <template #prefix>
                <user-outlined type="user" />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input-password size="large" placeholder="密码">
              <template #prefix>
                <lock-outlined type="lock" />
              </template>
            </a-input-password>
          </div>
          <div class="item">
            <a href="">忘记密码</a>
          </div>

          <div class="item">
            <a-button size="large" type="primary">登录</a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册" force-render>
          <div class="item">
            <a-input size="large" placeholder="账户">
              <template #prefix>
                <user-outlined type="user" />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input-password size="large" placeholder="密码">
              <template #prefix>
                <lock-outlined type="lock" />
              </template>
            </a-input-password>
          </div>
          <div class="item">
            <a-input size="large" placeholder="邀请码">
              <template #prefix>
                <mail-outlined type="mail" />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-button size="large" type="primary">注册</a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped lang="less">
@import url("./index.less");
</style>
