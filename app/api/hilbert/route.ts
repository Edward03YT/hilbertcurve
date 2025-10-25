import { NextRequest, NextResponse } from 'next/server';
import { HilbertCurve, Point } from '@/lib/hilbert';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const order = parseInt(searchParams.get('order') || '3');
  const size = parseInt(searchParams.get('size') || '500');
  const method = searchParams.get('method') || 'iterative';

  try {
    let points: Point[] = [];

    if (method === 'iterative') {
      const hilbert = new HilbertCurve(order, size);
      points = hilbert.getPoints();
    } else {
      // Metodă recursivă
      HilbertCurve.generateRecursive(
        order,
        0,
        0,
        size,
        0,
        0,
        size,
        points
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        points,
        order,
        size,
        method,
        totalPoints: points.length
      }
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to generate Hilbert curve' 
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { order = 3, size = 500 } = body;

    const points: Point[] = [];
    HilbertCurve.generateRecursive(
      order,
      0,
      0,
      size,
      0,
      0,
      size,
      points
    );

    return NextResponse.json({
      success: true,
      data: {
        points,
        order,
        size,
        stats: {
          totalSegments: points.length - 1,
          complexity: Math.pow(4, order)
        }
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}