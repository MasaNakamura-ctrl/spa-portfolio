// 各ページをtemplateとして保持し、ルートパスに合わせて表示
const Home = {
    template: `
        <div>
            <h1>Home</h1>
            <p>経歴とポートフォリオの紹介をするページです</p>
        </div>
    `
};

const Profile = {
    template: `
        <div>
            <h1>Profile</h1>
            <p>大学を卒業後、営業職やフリーランスとしての活動を通して顧客への企画提案や折衝経験を積み重ねて来ました。</p>
            <p>その後マーケティング業務に携わる中で企業全体が定型業務を効率化させ、本来力を注ぐべき業務に集中できるよう貢献したいと考え、エンジニアとしてのキャリアを歩み出しました。</p>
            <p>前職のSIerにて詳細設計から結合テストまでの工程を経験しており、顧客への企画提案や折衝経験も活かすことで、エンジニアリングだけでなく上流工程も通してビジネス目線で価値を出せるエンジニアとして活躍して行きたいと考えております。</p>
        </div>
    `
};

const lessonAssumedApp = {
    template: `
        <div>
            <h1>レッスン記録アプリ</h1>
            <a href="http://52.199.89.153:8080/">リンク先</a>
            <h3>ログイン情報</h3>
            <p>ユーザー名：lessonList</p>
            <p>パスワード：confirming</p>
        </div>
    `
};

const learningCalc = {
    template: `
        <div>
            <h1>計算機再現アプリ</h1>
            <a href="https://masanakamura-ctrl.github.io/learning-calc/">リンク先</a>
        </div>
    `
};

const usageRecord = {
    template: `
        <div>
            <h1>入退室管理アプリ</h1>
            <a href="https://usagerecord.streamlit.app/">リンク先</a>
        </div>
    `
};

const learningContents = {
    template: `
        <div>
            <h1>学習コンテンツ</h1>
            <a href="https://otafuku-lab.co/aizine/author/nakamura/">AIZINE</a>
            <p>AI（人工知能）について初学者の方にもわかりやすく親しみを持ってもらえるような記事を時に実装も交えて執筆していました。</p>
            <br>
            <a href="https://axross-recipe.com/users/549">Axross Recipe</a>
            <p>Pythonを用いたデータ分析のスキルを応用し、ビジネスの場で活かせることを想定した教材を執筆していました。</p>
            <br>
            <a href="https://www.youtube.com/watch?v=S5k3Qb3Er_M">【E資格講義】GCNとは　～メタ概念の数学的理解～</a>
            <p>E資格の出題範囲変更に伴い、GCNについて試験に出るポイントに絞った動画教材の作成をしました。</p>
            <a href="https://qiita.com/mshr_nkmr_ai">Qiita</a>
            <p>自主的なアウトプットとなります。</p>
            <a href="https://github.com/MasaNakamura-ctrl">Git Hub</a>
            <p>アプリケーションのソースコードはこちらにまとめてあります。</p>
        </div>
    `
};

const slideContents = {
    template: `
        <div>
            <h1>発表向け資料</h1>
            <h3>松尾・岩澤研究室主催 DL輪読会発表資料</h3>
            <p>東京大学松尾・岩澤研究室が行っている論文の輪読会にて発表した資料となります。</p>
            <a href="https://www.slideshare.net/slideshow/dllearning-to-dress-3d-people-in-generative-clothing/238529680">Learning to Dress 3D People in Generative Clothing</a>
            <br>
            <a href="https://www.slideshare.net/slideshow/dlautomatic-composition-of-guitar-tabs-by-transformers-and-groove-modeling/238697972">Automatic Composition of Guitar Tabs by Transformers and Groove Modeling</a>
            <br>
            <a href="https://www.slideshare.net/slideshow/dlpredicting-online-video-advertising-effects-with-multimodal-deep-learning/244053736">Predicting Online Video Advertising Effects with Multimodal Deep Learning</a>
            <h3>Music×Analytics Meetup Vol.3</h3>
            <p>「音楽×データ分析」に興味のある人を対象としたライトニングトークのイベントにて発表した資料となります。</p>
            <a href="https://www.slideshare.net/slideshow/vsshimon-249632563/249632563">人間VSロボット？！ラッパーロボShimonの論文を読んでみた！</a>
            <h3>CVPR 2020 網羅的サーベイ</h3>
            <p>CVPR 2020で発表された論文をチームで読み、それらから見出せるトレンドをメタサーベイとしてまとめた資料となります。</p>
            <a href="https://www.slideshare.net/slideshow/cvpr-2020-machine-learning-architectures-and-formulations/237199564">【CVPR 2020 メタサーベイ】Machine Learning Architectures and Formulations</a>
        </div>
    `
};

// ルーティング設定
const routes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/lesson-assumed-app', component: lessonAssumedApp},
    {path: '/learning-calc', component: learningCalc},
    {path: '/usageRecord', component: usageRecord},
    {path: '/learning-contents', component: learningContents},
    {path: '/slide-contents', component: slideContents}
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