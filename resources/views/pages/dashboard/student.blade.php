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
      <button class="button success">
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
          {{-- <tr>
            <td class="text-center">1</td>
            <td>Abraham Lincoln</td>
            <td class="text-center">1</td>
            <td class="text-center">
              <!-- State Read START -->
              <button class="button edit">
                <i class="fas fa-pencil-alt"></i>
                Edit
              </button>
              <!-- State Read END -->
              <!-- State Edit START -->

              <!-- State Edit END -->
            </td>
            <td class="text-center">
              <button class="button danger">Remove</button>
            </td>
          </tr>

          <tr>
            <td class="text-center">2</td>
            <td>Brandon Williams</td>
            <td class="text-center">1</td>
            <td class="text-center">
              <!-- State Read START -->
              <button class="button edit">
                <i class="fas fa-pencil-alt"></i>
                Edit
              </button>
              <!-- State Read END -->
              <!-- State Edit START -->

              <!-- State Edit END -->
            </td>
            <td class="text-center">
              <button class="button danger">Remove</button>
            </td>
          </tr>

          <tr>
            <td class="text-center">3</td>
            <td>Charlize Theron</td>
            <td class="text-center">1</td>
            <td class="text-center">
              <!-- State Read START -->
              <button class="button edit">
                <i class="fas fa-pencil-alt"></i>
                Edit
              </button>
              <!-- State Read END -->
              <!-- State Edit START -->

              <!-- State Edit END -->
            </td>
            <td class="text-center">
              <button class="button danger">Remove</button>
            </td>
          </tr> --}}
        </tbody>
      </table>
    </div>
  </div>
@endsection

@section('scripts')
  <link href="{{ asset('/css/pages/student.css') }}" rel="stylesheet">
  <script type="text/javascript" src="/js/pages/student.js"></script>
@endsection