<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta charset="utf-8">
	<script type="text/javascript" scr="search-script.js"></script>
	 <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<0f1b925f-6e13-4132-b01c-25d9596db2e5>" type="text/javascript"></script>
	<script src="https://gist.github.com/arunstar/531a1a7f11005694defe977ef7c2295b.js"></script>
	<script type="text/javascript" src="https://data.gov.uz/ru/api/v1/json/dataset?access_key=7ca89c56037cbccf6dc0992e08f33375"></script>
    <script src="placemark.js" type="text/javascript"></script>
	<style>
        html, body, #map {
            width: 100%; height: 100%; padding: 0; margin: 0;
        }
    </style>
	<title>BizPlace - Поиск подходящего помещенияы для вашего бизнеса</title>
</head>
<body>
	<?php
		include "header.php"
	?>
	<div class="wrapper">
	   <div id="map" style="width: 100%; height: 100vh"></div>
<script type="text/javascript" src="map.js"></script>
</div>
</body>
</html>
