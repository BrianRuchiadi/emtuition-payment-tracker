<?php
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AuthorizedPageController extends Controller
{
  public function displayPageDashboard(Request $request) {
    return view('pages.dashboard.main');
  }

  public function displayPageTimetable(Request $request) {
    return view('pages.dashboard.timetable');
  }

  public function displayPageStudent(Request $request) {
    return view('pages.dashboard.student');
  }

  public function displayPagePayment(Request $request) {
    return view('pages.dashboard.payment');
  }

  public function displayPagePaymentHistory(Request $request) {
    return view('pages.dashboard.payment-history');
  }
}