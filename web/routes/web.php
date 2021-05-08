<?php

Route::get('/{any?}', fn() => view('index'))->where('any', '.+');
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
