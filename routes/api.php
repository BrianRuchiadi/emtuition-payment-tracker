<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['namespace' => 'App\Http\Controllers\Api'], function () {
    // Route::get('/', 'AuthorizedPageController@displayPageDashboard');
    // Route::get('/timetable', 'AuthorizedPageController@displayPageTimetable');
    Route::get('/students', 'StudentController@getStudents');
    // Route::get('/payment', 'AuthorizedPageController@displayPagePayment');
    // Route::get('/payment/history', 'AuthorizedPageController@displayPagePaymentHistory');
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
