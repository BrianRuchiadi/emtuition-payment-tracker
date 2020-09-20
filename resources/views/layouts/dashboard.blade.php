<!DOCTYPE html>
<html>
  <head>
    <title>EM Tuition | @yield('title')</title>
    @include('layouts.scripts.dashboard')
    @yield('scripts')
  </head>
  <body>
    <div class="main">
      @include('components.sidebar')
      <div class="content-wrapper">
        <header>
          
        </header>
        <div class="content">
          @yield('content')
        </div>
      </div>
    </div>
  </body>
</html>