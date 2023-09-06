from PIL import Image, ImageDraw
from math import log, log2

MAX_ITER = 100

def mandelbrot(c):
    z = 0
    n = 0
    while abs(z) <= 2 and n < MAX_ITER:
        z = z*z + c
        n += 1

    if n == MAX_ITER:
        return MAX_ITER
    
    return n + 1 - log(log2(abs(z)))

def t1(elem,scale):
    if(scale==1):
        return 0
    else:
        return elem*(0.5-0.5*(0.9**scale))
# Image size (pixels)
def main(transform,scale,name):
    
    print(transform)
    WIDTH = int(1080)
    HEIGHT = int(720)
    transform=[x/WIDTH for x in transform]
    # Plot window
    
    t2=0.9
    RE_START = -2-(transform[0]/t2)+t1(3,scale)
    RE_END = (1-(transform[0]/t2))-t1(3,scale)
    IM_START = -1-(transform[1]/t2)+t1(2,scale)
    IM_END = (1-(transform[1]/t2))-t1(2,scale)

    im = Image.new('HSV', (WIDTH, HEIGHT), (0, 0, 0))
    draw = ImageDraw.Draw(im)

    for x in range(0, WIDTH):
        for y in range(0, HEIGHT):
            # Convert pixel coordinate to complex number
            c = complex(RE_START + (x / WIDTH) * (RE_END - RE_START),
                        IM_START + (y / HEIGHT) * (IM_END - IM_START))
            # Compute the number of iterations
            m = mandelbrot(c)
            # The color depends on the number of iterations
            hue = int(255 *( m *2)/ (MAX_ITER))
            saturation = 255
            value = 400 if m < MAX_ITER else 0
            # Plot the point
            draw.point([x, y], (hue, saturation, value))

    im.convert('RGB').save(name, 'PNG')