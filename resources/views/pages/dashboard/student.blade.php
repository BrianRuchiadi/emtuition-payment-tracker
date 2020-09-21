@extends('layouts.dashboard')

@section('title')
  Timetable
@endsection

@section('content')
  <div class="inner-content-wrapper">
    <h2 class="title">
      Student
    </h2>
    <hr/>

    <div class="row action">
      <button class="button success" id="open-modal">
        <i class="fas fa-plus"></i>
        Add Student
      </button>
    </div>
    <div class="row search-bar">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="Type any student name">
    </div>
    <div class="row">
      <table class="table max-width">
        <thead>
          <tr>
            <th width="40">#</th>
            <th>Name</th>
            <th width="80">Level</th>
            <th width="150"></th>
            <th width="100">
              <i class="fas fa-trash-alt"></i>
            </th>
          </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
      </table>
    </div>
  </div>

  <div class="modal-coverage" id="modal-coverage">
    <div class="modal fit">
      <h2 class="modal-header">Add Student</h2>
      <div class="modal-content">
        <h5 class="legend">Name :</h5>
        <div>
          <input type="text">
        </div>

        <h5 class="legend">Level :</h5>
        <div>
          <input type="text">
        </div>
        <div class="seperator">
          <button class="success">Create</button>
        </div>
        <div class="seperator">
          <button class="danger" id="close-modal">Close</button>
        </div>
      </div>
    </div>
  </div>
@endsection

@section('scripts')
  <link href="{{ asset('/css/pages/student.css') }}" rel="stylesheet">
  <script type="text/javascript" src="/js/pages/student.js"></script>
@endsection