export interface Point {
  x: number;
  y: number;
}

export class HilbertCurve {
  private points: Point[] = [];
  
  constructor(private order: number, private size: number) {
    this.generate();
  }

  private generate(): void {
    this.points = [];
    const n = Math.pow(2, this.order);
    const step = this.size / n;
    
    for (let i = 0; i < n * n; i++) {
      const { x, y } = this.hilbertIndexToXY(i, n);
      this.points.push({
        x: x * step + step / 2,
        y: y * step + step / 2
      });
    }
  }

  // Convertește index Hilbert în coordonate x, y
  private hilbertIndexToXY(index: number, n: number): Point {
    const positions: Point[] = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 }
    ];

    let x = 0;
    let y = 0;
    let s = 1;

    while (s < n) {
      const rx = 1 & (index >> 1);
      const ry = 1 & (index ^ rx);
      
      const point = this.rotate(s, { x, y }, rx, ry);
      x = point.x + s * rx;
      y = point.y + s * ry;
      
      index >>= 2;
      s <<= 1;
    }

    return { x, y };
  }

  // Rotație pentru generarea curbei
  private rotate(n: number, point: Point, rx: number, ry: number): Point {
    if (ry === 0) {
      if (rx === 1) {
        point.x = n - 1 - point.x;
        point.y = n - 1 - point.y;
      }
      
      const temp = point.x;
      point.x = point.y;
      point.y = temp;
    }
    
    return point;
  }

  public getPoints(): Point[] {
    return this.points;
  }

  // Generare recursivă alternativă pentru vizualizare pas cu pas
  public static generateRecursive(
    order: number,
    x: number,
    y: number,
    xi: number,
    xj: number,
    yi: number,
    yj: number,
    points: Point[]
  ): void {
    if (order <= 0) {
      points.push({ 
        x: x + (xi + yi) / 2, 
        y: y + (xj + yj) / 2 
      });
    } else {
      this.generateRecursive(
        order - 1, x, y, yi / 2, yj / 2, xi / 2, xj / 2, points
      );
      this.generateRecursive(
        order - 1, x + xi / 2, y + xj / 2, xi / 2, xj / 2, yi / 2, yj / 2, points
      );
      this.generateRecursive(
        order - 1, x + xi / 2 + yi / 2, y + xj / 2 + yj / 2, xi / 2, xj / 2, yi / 2, yj / 2, points
      );
      this.generateRecursive(
        order - 1, x + xi / 2 + yi, y + xj / 2 + yj, -yi / 2, -yj / 2, -xi / 2, -xj / 2, points
      );
    }
  }
}