<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['namespace' => 'App\Http\Controllers\Web'], function () {
    Route::get('/', 'AuthorizedPageController@displayPageDashboard');
    Route::get('/timetable', 'AuthorizedPageController@displayPageTimetable');
    Route::get('/student', 'AuthorizedPageController@displayPageStudent');
    Route::get('/payment', 'AuthorizedPageController@displayPagePayment');
    Route::get('/payment/history', 'AuthorizedPageController@displayPagePaymentHistory');
});

// Route::get('/', function () {
//     return view('welcome');
// });