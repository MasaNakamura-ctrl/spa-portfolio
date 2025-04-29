// 各ページをtemplateとして保持し、ルートパスに合わせて表示
const Home = {
    template: `
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page.</p>
        </div>
    `
};

const About = {
    template: `
        <div>
            <h1>About Page</h1>
            <p>This is a simple SPA example using Vue.js.</p>
        </div>
    `
};

const Added = {
    template: `
        <div>
            <h1>Added Page</h1>
            <p>This is an Added Page.</p>
        </div>
    `
};

// ルーティング設定
const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/added', component: Added}
];

// ルーター作成
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

// アプリ作成
const app = Vue.createApp({});
app.use(router);
app.mount('#app');