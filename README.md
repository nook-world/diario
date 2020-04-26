# My Miles

An animal crossing site to set personal milestones.

## Requirements

- Node 10 or superior

## Run the project

```
$ npm install
$ npm run build
$ npm start
```

## Run DEV (edit, test localy, ...)
```
$ npm run dev
```

## Local test Next Export

To test local export export you can run the following commands:

```
$ npm run build
$ npm run export
$ cd out
$ npx serve
```

## Imagemagick commands

### Minify pngs

```
mogrify -filter Triangle -define filter:support=2 -unsharp 0.25x0.08+8.3+0.045 -dither None -posterize 136 -quality 82 -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB *.png
```

### Split sprites

- **12x8:** Sprite grid (X Y axys);
- **5-5:** Padding between grids.

```
convert name.png -crop 12x8-5-5@ +repage +adjoin _%d.png
```

### Resize images

**400x400:** Size in pixels

```
mogrify -resize 400x400 *.png
```
