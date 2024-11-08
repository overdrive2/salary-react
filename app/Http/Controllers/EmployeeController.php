<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmployeeController extends Controller
{
    public function show(Request $request): Response
    {
        return Inertia::render('Employee/Page', [
            'rows' => Employee::select('ptitle', 'fname', 'lname')->get()
        ]);
    }

}

