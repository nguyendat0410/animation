# React Native Custom Image Carousel

Create Custom Image Carousel in react native using [Reanimated 2](https://docs.swmansion.com/react-native-reanimated/)

Image Assets - https://drive.google.com/drive/folders/166lND4ag_dfFkQyDenwbeINbgDCUYoOR?usp=sharing

## Demo

Custom Image Carousel (Square) Demo

![Demo1](./Demo1.gif)

Custom Image Carousel (Landscape) Demo

![Demo1](./Demo2.gif)

Pagination Demo

![Demo1](./Demo4.gif)

Demo on Android (Left) and Ios (Right)

![Demo2](./Demo3.gif)

## Properties

| Name         | Description                                          | Type  | Default Value |
| :----------- | :--------------------------------------------------- | :---- | :------------ |
| `data`       | Image data                                           | Array | **Required**  |
| `autoPlay`   | If `true` then the carousel will auto play           | Bool  | **Required**  |
| `pagination` | if `true` then the carousel will show the pagination | Bool  | **Required**  |

## Run Locally

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start -- --reset-cache
```

Run on IOS

```bash
  npx pod-install
  npx react-native run-ios
```

Run on ANDROID

```bash
  npx react-native run-android
```
