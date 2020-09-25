<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class StudentController extends Controller
{
  public function getStudents(Request $request) {
    $students = [];

    $student = new \stdClass();
    $student->id = 1;
    $student->name = 'Abraham Collins';
    $student->level = 1;
    $students[0] = $student;
    
    $student = new \stdClass();
    $student->id = 2;
    $student->name = 'Brian Ruchiadi';
    $student->level = 1;
    $students[1] = $student;

    $student = new \stdClass();
    $student->id = 3;
    $student->name = 'Crawler Jordan';
    $student->level = 2;
    $students[2] = $student;
    
    return response()->json([
      'students' => $students
    ]);
  }
}