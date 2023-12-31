﻿/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Admin',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/practice',
    name: 'list.practice-list',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/practice',
        redirect: '/practice/prac_1',
      },
      {
        path: '/practice/prac_1',
        name: 'first-page',
        component: './Practice/prac_1',
      },
      {
        path: '/practice/prac_2',
        name: 'second-page',
        component: './Practice/prac_2',
      },
      {
        path: '/practice/prac_3',
        name: 'third-page',
        component: './Practice/prac_3',
      },
      {
        path: '/practice/prac_4',
        name: 'fourth-page',
        component: './Practice/prac_4',
      },
      {
        path: '/practice/prac_5',
        name: 'fifth-page',
        component: './Practice/prac_5',
      },
      {
        path: '/practice/prac_6',
        name: 'sixth-page',
        component: './Practice/prac_6',
      },
      {
        path: '/practice/prac_7',
        name: 'seventh-page',
        component: './Practice/prac_7',
      },
      {
        path: '/practice/prac_8',
        name: 'eighth-page',
        component: './Practice/prac_8',
      },
      {
        path: '/practice/prac_9',
        name: 'ninth-page',
        component: './Practice/prac_9',
      },
      {
        path: '/practice/prac_10',
        name: 'tenth-page',
        component: './Practice/prac_10',
      },
      {
        path: '/practice/prac_11',
        name: 'eleventh-page',
        component: './Practice/prac_11',
      },
      {
        path: '/practice/prac_12',
        name: 'twelfth-page',
        component: './Practice/prac_12',
      },
      {
        path: '/practice/prac_13',
        name: 'thirteenth-page',
        component: './Practice/prac_13',
      },
      {
        path: '/practice/prac_14',
        name: 'fourteenth-page',
        component: './Practice/prac_14',
      },
      {
        path: '/practice/prac_15',
        name: 'fifteenth-page',
        component: './Practice/prac_15',
      },
      {
        path: '/practice/prac_16',
        name: 'sixteenth-page',
        component: './Practice/prac_16',
      },
      {
        path: '/practice/prac_17',
        name: 'seventeenth-page',
        component: './Practice/prac_17',
      },
      {
        path: '/practice/prac_18',
        name: 'eighteenth-page',
        component: './Practice/prac_18',
      },
      {
        path: '/practice/prac_19',
        name: 'ninteenth-page',
        component: './Practice/prac_19',
      },
      {
        path: '/practice/prac_20',
        name: 'twentieth-page',
        component: './Practice/prac_20',
      },
      {
        path: '/practice/prac_21',
        name: 'twenty-one-page',
        component: './Practice/prac_21',
      },
      {
        path: '/practice/prac_22',
        name: 'twenty-two-page',
        component: './Practice/prac_22',
      },
      {
        path: '/practice/prac_23',
        name: 'twenty-three-page',
        component: './Practice/prac_23',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
