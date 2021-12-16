<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::latest()->get();

        return Inertia::render('Courses/Index', [
            'courses' => $courses,
        ]);
    }
}
