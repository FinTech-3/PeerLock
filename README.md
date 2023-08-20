# PeerLock
A P2P service alternative to traaditional storage facilities.

## Important
This application does not represent a finalised version for deployment; it is a frontend-focused alpha version of the application that demonstrates core services and features. As such, some features will not function as intended.

## Installation
This application mockup currently has to be built by the user. There is no built version available. \n
The application is written in Java, JavaScript, and SQL.

Be sure to have the following installed before continuing: \n
1. Java (11, 2.7.14), Spring Boot (Gradle build) and its dependencies (Data JDBC, JPA, Spring Web, Lombok, aws-java-sdk-s3).
2. ReactJS
3. MySQL

Once all files are cloned, run ServerApplication.java to launch the backend server. Navigate to ~/client and run /n

<pre>
npm i
</pre> 
and then
<pre>
npm start
</pre>
to launch the application itself. Set the view to 'iPhone 12 Pro' for the best viewing experience.

```
client
├─ .eslintrc
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ google1.png
│  ├─ grahamroberts.jpeg
│  ├─ index.html
│  ├─ kakao.png
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  ├─ mockServiceWorker.js
│  ├─ naver.png
│  └─ robots.txt
└─ src
   ├─ App.js
   ├─ App.test.js
   ├─ GlobalStyles.js
   ├─ Review
   │  └─ Review.js
   ├─ api
   │  ├─ changeView.js
   │  ├─ getMyStorage.js
   │  ├─ getReservationDetails.js
   │  ├─ getStorageDetail.js
   │  ├─ getStorageList.js
   │  ├─ getWishList.js
   │  ├─ index.js
   │  ├─ login.js
   │  └─ registStorage.js
   ├─ components
   │  ├─ AddressInput.jsx
   │  ├─ FixBottomNavigation.jsx
   │  ├─ FixBottomNavigationHost.jsx
   │  ├─ NaverMapComponent.jsx
   │  ├─ chat
   │  │  └─ ChatList.jsx
   │  ├─ common
   │  │  ├─ AppHeader.jsx
   │  │  ├─ SearchComponent.jsx
   │  │  ├─ SelectComponent.jsx
   │  │  └─ TopNavigationComponent.jsx
   │  ├─ my
   │  │  ├─ AddStorageCard.jsx
   │  │  └─ MyStorageComponent.jsx
   │  ├─ storage
   │  │  ├─ StorageDetail.jsx
   │  │  ├─ StorageList.jsx
   │  │  ├─ StorageReservationUploadComponent.jsx
   │  │  └─ StoreagReservationComponent.jsx
   │  └─ wish
   │     └─ WishList.jsx
   ├─ constants
   │  ├─ colors.js
   │  └─ commonStyle.js
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   ├─ mocks
   │  ├─ browser.js
   │  ├─ handlers
   │  │  ├─ chat.js
   │  │  ├─ storage.js
   │  │  └─ user.js
   │  ├─ index.js
   │  └─ server.js
   ├─ pages
   │  ├─ Chat
   │  │  ├─ Chat.jsx
   │  │  └─ ChatHost.jsx
   │  ├─ Finance
   │  │  └─ FinanceHost.jsx
   │  ├─ Home
   │  │  ├─ HomeGuest.jsx
   │  │  ├─ HomeHost.jsx
   │  │  └─ Login.jsx
   │  ├─ Map
   │  │  └─ MapScreen.jsx
   │  ├─ My
   │  │  ├─ MyGuest.jsx
   │  │  ├─ MyHost.jsx
   │  │  └─ MyStoragePage.jsx
   │  ├─ Review
   │  │  └─ Review.jsx
   │  ├─ Routes.js
   │  ├─ Storage
   │  │  ├─ Storage.jsx
   │  │  ├─ StorageDetailPage.jsx
   │  │  ├─ StorageRegist.jsx
   │  │  ├─ StorageReservationUploadPage.jsx
   │  │  └─ StoreagReservationPage.jsx
   │  └─ Wish
   │     └─ Wish.jsx
   ├─ reportWebVitals.js
   ├─ setupTests.js
   └─ styles
      ├─ app.scss
      ├─ colors.scss
      ├─ font.scss
      └─ fonts
         ├─ NanumGothic.eot
         ├─ NanumGothic.woff
         ├─ NanumGothicExtraBold.eot
         ├─ NanumGothicExtraBold.woff
         ├─ SpoqaHanSansNeo-Bold.ttf
         ├─ SpoqaHanSansNeo-Light.ttf
         ├─ SpoqaHanSansNeo-Medium.ttf
         └─ SpoqaHanSansNeo-Regular.ttf

```
