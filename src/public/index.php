<?php
require _DIR_.'/../bootstrap/autoload.php';
$app = require_once _DIR_.'/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$response = $kernel->handle(
	$request = Illuminate\Http\Request::capture()
);
$response->send();
$kernel->terminate($request,$response);
