// 各ページをtemplateとして保持し、ルートパスに合わせて表示
const Home = {
    template: `
        <div>
            <h1>Home</h1>
            <p>中村真裕のプロフィールとポートフォリオを紹介するページです。</p>
            <p>実装したものと記事やコンテンツとして公開しているものがあるのでご興味に応じご確認いただけますと幸いです。</p>
        </div>
    `
};

const Profile = {
    template: `
        <div>
            <h1>Profile</h1>
            <h3>職歴・エンジニアにかける思い</h3>
            <p>大学を卒業後、営業職やフリーランスとしての活動を通して顧客への企画提案や折衝経験を積み重ねて来ました。</p>
            <p>その後マーケティング業務に携わる中で企業全体が定型業務を効率化させ、本来力を注ぐべき業務に集中できるよう貢献したいと考え、エンジニアとしてのキャリアを歩み出しました。</p>
            <p>前職のSIerにて詳細設計からデプロイ後の結合テストまでの工程を経験しています。</p>
            <p>今後はバックエンドやフロントエンドのような括りだけでなく上流工程も経験し、ビジネス目線で価値を出せるエンジニアとして活躍して行きたいと考えております。</p>
            <h3>スキルセット</h3>
            <table>
                <tr class="head">
                    <td>技術・工程</td>
                    <td>経験レベル</td>
                </tr>
                <tr>
                    <td>Java</td>
                    <td>SIerやポートフォリオにて実装経験あり</td>
                </tr>
                <tr>
                    <td>Python</td>
                    <td>機械学習・データ分析の教材で使用</td>
                </tr>
                <tr>
                    <td>HTML</td>
                    <td>ポートフォリオにて実装経験あり</td>
                </tr>
                <tr>
                    <td>CSS</td>
                    <td>ポートフォリオにて実装経験あり</td>
                </tr>
                <tr>
                    <td>JavaScript</td>
                    <td>本サイトにてVueのルーターを使用</td>
                </tr>
                <tr>
                    <td>Spring Boot</td>
                    <td>SIerやポートフォリオにて実装経験あり</td>
                </tr>
                <tr>
                    <td>TensorFlow</td>
                    <td>紹介記事で実装経験あり</td>
                </tr>
                <tr>
                    <td>MySQL</td>
                    <td>システムテストで使用経験あり</td>
                </tr>
                <tr>
                    <td>PostgreSQL</td>
                    <td>ポートフォリオで設計経験まであり</td>
                </tr>
                <tr>
                    <td>SQLite</td>
                    <td>ポートフォリオで使用経験あり</td>
                </tr>
                <tr>
                    <td>Oracle</td>
                    <td>学習経験あり</td>
                </tr>
                <tr>
                    <td>AWS</td>
                    <td>ポートフォリオでゼロからのデプロイ経験あり</td>
                </tr>
                <tr>
                    <td>Azure</td>
                    <td>会社のマニュアルに沿ったデプロイ経験あり</td>
                </tr>
                <tr>
                    <td>Docker</td>
                    <td>ローカルでのDB環境やEC2へのデプロイ等で使用経験あり</td>
                </tr>
                <tr>
                    <td>GitHub</td>
                    <td>実務及びポートフォリオで使用経験あり</td>
                </tr>
                <tr>
                    <td>JUnit</td>
                    <td>
                        <a href="https://github.com/MasaNakamura-ctrl/WaGotcha">現在開発中のSPA</a>
                        の単体テストにて使用経験あり
                    </td>
                </tr>
                <tr>
                    <td>Mockito</td>
                    <td>
                        <a href="https://github.com/MasaNakamura-ctrl/WaGotcha">現在開発中のSPA</a>
                        の単体テストにて使用経験あり
                    </td>
                </tr>
                <tr>
                    <td>Postman</td>
                    <td>
                        <a href="https://github.com/MasaNakamura-ctrl/WaGotcha">現在開発中のSPA</a>
                        の結合テストにて使用経験あり
                    </td>
                </tr>
                <tr>
                    <td>設計</td>
                    <td>仕様書に沿った詳細設計の経験あり</td>
                </tr>
                <tr>
                    <td>プログラムコーディング</td>
                    <td>実務及びポートフォリオで経験あり</td>
                </tr>
                <tr>
                    <td>インフラ設計、構築</td>
                    <td>ポートフォリオで経験あり</td>
                </tr>
                <tr>
                    <td>テスト</td>
                    <td>実務で単体テスト、結合テスト、システムテストまで経験あり</td>
                </tr>
            </table>
        </div>
    `
};

const lessonAssumedApp = {
    template: `
        <div>
            <h1>レッスン記録アプリ</h1>
            <a href="http://52.199.89.153:8080/"><img class="full-screen" src="./login.png"></a>
            <br>
            <img class="full-screen" src="./top.png">
            <h3>概要</h3>
            <p>設計からデプロイ後のシステムテストまでを一人称でゼロから再現し、ポートフォリオとして構築したCRUDアプリになります。</p>
            <p>ログイン画面の画像を押下し、下記のユーザー名とパスワードを入力することで実際のCRUD機能をお試し頂けます。</p>
            <p>ユーザー名：lessonList</p>
            <p>パスワード：confirming</p>
            <a href="https://github.com/MasaNakamura-ctrl/lesson-assumed-app">ソースコード等詳細</a>
            <h3>システム構成図</h3>
            <img class="aws" src="./lesson-assumed-app.png">
            <h3>技術スタック</h3>
            <h4>フロントエンド</h4>
            <p>HTML</p>
            <p>CSS</p>
            <h4>バックエンド</h4>
            <p>Java 21</p>
            <p>Spring Boot 3.4.1</p>
            <h4>DB</h4>
            <p>PostgreSQL 14.15</p>
            <h4>OS</h4>
            <p>macOS</p>
            <p>Amazon Linux 2023(EC2インスタンス)</p>
            <h4>インフラ管理</h4>
            <p>Docker 20.10.12</p>
            <h4>クラウド</h4>
            <p>AWS</p>
        </div>
    `
};

const learningCalc = {
    template: `
        <div>
            <h1>計算機再現アプリ</h1>
            <a href="https://masanakamura-ctrl.github.io/learning-calc/"><img class="calc" src="./js-calc.png"></a>
            <h3>概要</h3>
            <p>JavaScriptを用いた実装の学習として、iPhoneの計算機アプリの外見に近づけながら計算機能を実装したアプリとなります。</p>
            <p>画像を押下することで実際の機能をお試し頂けます。</p>
            <h3>技術スタック</h3>
            <h4>フロントエンド</h4>
            <p>HTML</p>
            <p>CSS</p>
            <p>Java Script</p>
            <a href="https://github.com/MasaNakamura-ctrl/learning-calc">ソースコード等詳細</a>
        </div>
    `
};

const usageRecord = {
    template: `
        <div>
            <h1>入退室管理アプリ</h1>
            <a href="https://usagerecord.streamlit.app/"><img class="full-screen" src="./usageRecord.png"></a>
            <h3>概要</h3>
            <p>大学での共用スペースでの利用記録をノートではなく画面入力で行えることを想定し、Streamlitによるシンプルなデプロイを実施したアプリとなります。</p>
            <p>画像を押下することで実際の機能をお試し頂けます。</p>
            <h3>技術スタック</h3>
            <h4>バックエンド</h4>
            <p>Python</p>
            <p>Streamlit</p>
            <p>SQLite3</p>
            <a href="https://github.com/MasaNakamura-ctrl/usageRecord">ソースコード等詳細</a>
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

const Contact = {
    template: `
        <div>
            <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfRwQU1pf_vVx6j4ZJADiXGdkfMPIosHUQNw9Cu_BDcQ0WztQ/viewform?usp=dialog"
            width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">
                読み込んでいます…
            </iframe>
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
    {path: '/slide-contents', component: slideContents},
    {path: '/contact', component: Contact}
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