<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="title" content="Color Manager">
    <meta name="description" content="Hex code based color manager">
    <meta name="robots" content="noindex, nofollow" />
    <link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64" href="{{ asset('images/favicon.ico') }}">
    <link rel="canonical" href="https://color-manager.xyz" />

    <title>Color Manager</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>