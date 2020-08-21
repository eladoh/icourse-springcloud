import Vue from "vue"
import Router from "vue-router"
import Login from "./views/login.vue"
import Admin from "./views/admin.vue"
import Chapter from "./views/admin/chapter.vue"
import Welcome from "./views/admin/welcome.vue"
// import Admin from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin.vue"
// import Welcome from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/welcome.vue"
// import Category from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/category.vue"
// import Course from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/course.vue"
// import Chapter from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/chapter.vue"
// import Section from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/section.vue"
// import Content from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/content.vue"
// import Teacher from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/teacher.vue"
// import File from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/file.vue"
// import User from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/user.vue"
// import Resource from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/resource.vue"
// import Role from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/role.vue"
// import Member from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/member.vue"
// import Sms from "../../../../Desktop/java big data atguigu /spring cloud + vue/视频/资料/course-online_20200414/admin(更多IT教程 www.itspxx.com)/src/views/admin/sms.vue"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: '*',
        redirect: "/login",
    },{
        path: '/login',
        component: Login
    },{
        path: '/',
        name: "admin",
        component: Admin,
        children: [{
            path: 'welcome',
            name: 'welcome',
            component: Welcome,
        }, {
            path: 'business/chapter',
            name: 'business/chapter',
            component: Chapter,
        }]
    }]
    // routes: [{
    //     path: "*",
    //     redirect: "/login",
    // }, {
    //     path: "",
    //     redirect: "/login",
    // }, {
    //     path: "/login",
    //     component: Login
    // }, {
    //     path: "/",
    //     name: "admin",
    //     component: Admin,
    //     meta: {
    //         loginRequire: true
    //     },
    //     children: [{
    //         path: "welcome",
    //         name: "welcome",
    //         component: Welcome,
    //     }, {
    //         path: "business/category",
    //         name: "business/category",
    //         component: Category,
    //     }, {
    //         path: "business/course",
    //         name: "business/course",
    //         component: Course,
    //     }, {
    //         path: "business/chapter",
    //         name: "business/chapter",
    //         component: Chapter,
    //     }, {
    //         path: "business/section",
    //         name: "business/section",
    //         component: Section,
    //     }, {
    //         path: "business/content",
    //         name: "business/content",
    //         component: Content,
    //     }, {
    //         path: "business/teacher",
    //         name: "business/teacher",
    //         component: Teacher,
    //     }, {
    //         path: "business/member",
    //         name: "business/member",
    //         component: Member,
    //     }, {
    //         path: "business/sms",
    //         name: "business/sms",
    //         component: Sms,
    //     }, {
    //         path: "file/file",
    //         name: "file/file",
    //         component: File,
    //     }, {
    //         path: "system/user",
    //         name: "system/user",
    //         component: User,
    //     }, {
    //         path: "system/resource",
    //         name: "system/resource",
    //         component: Resource,
    //     }, {
    //         path: "system/role",
    //         name: "system/role",
    //         component: Role,
    //     }]
    // }]
})
