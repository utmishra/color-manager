<?php

namespace App\Http\Controllers;

use App\Http\Resources\ColorResource;
use App\Models\Color;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ColorController extends Controller
{

    /**
     * Display a listing of the colors.
     *
     * @param int $pageSize
     * @param int $from
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $request->validate([
            'size' => 'nullable|min:0',
            'from' => 'nullable|min:0'
        ]);
        $pageSize = $request->input('size') != null ? $request->input('size') : 30;
        $from     = $request->input('from') != null ? $request->input('from') : 1;
        Log::info("Page size: {$pageSize}, Offset: {$from}");
        return ColorResource::collection(Color::where('is_deleted', false)->orderByDesc('created_at')->skip($from)->take($pageSize)->get());
    }

    /**
     * Store a newly created color in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $color = new Color;
        $color->hex = $request->hex;
        $color->name = $request->name;
        $color->save();
        return new ColorResource($color);
    }

    /**
     * Display the specified color.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Color $color)
    {
        return new ColorResource($color);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Color $color)
    {
        $color->update($request->only(['name', 'hex']));
        return new ColorResource($color);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Color $color)
    {
        $color->delete();
        return response()->json([
            'status'  => 204,
            'message' => 'Deleted'
        ], 204);
    }
}
