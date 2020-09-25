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
      <button class="button success" id="open-modal-add">
        <i class="fas fa-plus"></i>
        Add Student
      </button>
    </div>
    <div class="row search-bar">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="Type any student name" id="search">
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

  <div class="modal-coverage hidden" id="modal-coverage-add">
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
          <button class="danger" id="close-modal-add">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-coverage hidden" id="modal-coverage-remove">
    <div class="modal fit">
      <h2 class="modal-header">Remove Student</h2>
      <div class="modal-content">
        <h5 class="legend">Name : 
          <span id="name-remove"></span>
        </h5>
        <h5 class="legend">Level :
          <span id="level-remove"></span>
        </h5>
        <div class="seperator">
          <button class="danger">Remove</button>
        </div>
        <div class="seperator">
          <button class="warning" id="close-modal-remove">Cancel</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-coverage hidden" id="modal-coverage-edit">
    <div class="modal fit">
      <h2 class="modal-header">Edit Student</h2>
      <div class="modal-content">
        <h5 class="legend">Name : </h5>
        <div>
          <input type="text" id="name-edit">
        </div>
        <h5 class="legend">Level : </h5>
        <div>
          <input type="text" id="level-edit">
        </div>
        <div class="seperator">
          <button class="success" id="save-edit">Save</button>
        </div>
        <div class="seperator">
          <button class="warning" id="close-modal-edit">Cancel</button>
        </div>
      </div>
    </div>
  </div>
@endsection

@section('scripts')
  <link href="{{ asset('/css/pages/student.css') }}" rel="stylesheet">
  <script type="text/javascript" src="/js/pages/student.js"></script>
@endsection