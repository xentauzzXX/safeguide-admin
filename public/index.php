<?php

// Dapatkan autoloader Laravel
require __DIR__.'/../vendor/autoload.php';

// Bootstrap aplikasi Laravel
$app = require_once __DIR__.'/../bootstrap/app.php';

// Jalankan aplikasi
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);