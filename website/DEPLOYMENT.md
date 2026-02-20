# Word Diffusion - Self-Hosting Deployment Guide

## Prerequisites

- Nginx installed (`sudo apt install nginx` on Ubuntu)
- Built static files (`npm run build`)

## Quick Start

### 1. Build the static site

```bash
cd website
npm install
npm run build
# This creates the build/ directory with all static files
```

### 2. Copy build files to your server

```bash
# Option A: Local deployment
sudo cp -r build/* /var/www/word-diffusion/

# Option B: Remote deployment
rsync -avz build/ user@your-server:/var/www/word-diffusion/
```

### 3. Configure Nginx

#### Copy the config file

```bash
sudo cp nginx.conf /etc/nginx/sites-available/word-diffusion
```

#### Edit the config to set your paths

```bash
sudo nano /etc/nginx/sites-available/word-diffusion
```

Change line 11:

```nginx
root /var/www/word-diffusion;  # Update this path
```

And optionally line 9 for your domain:

```nginx
server_name your-domain.com;  # Or localhost for local
```

#### Enable the site

```bash
sudo ln -s /etc/nginx/sites-available/word-diffusion /etc/nginx/sites-enabled/
```

#### Test configuration

```bash
sudo nginx -t
```

#### Reload Nginx

```bash
sudo systemctl reload nginx
```

### 4. Visit your site

```
http://localhost
# or
http://your-domain.com
```

## Verify Compression

Check that gzip is working:

```bash
curl -H "Accept-Encoding: gzip" -I http://localhost/model/model.onnx | grep content-encoding
# Should show: content-encoding: gzip
```

Check transfer size:

```bash
# Without compression: ~935 KB
# With compression: ~58 KB (93.8% reduction!)
```

## Performance Tips

1. **Enable HTTP/2** for multiplexing (uncomment SSL lines in nginx.conf)
2. **Use Brotli** instead of gzip for even better compression:

   ```bash
   sudo apt install nginx-module-brotli
   # Add to nginx.conf:
   brotli on;
   brotli_comp_level 6;
   ```

3. **CDN** (optional): Put Cloudflare in front for global edge caching

## Troubleshooting

**404 errors on routes:**

- Make sure `try_files $uri $uri/ /index.html;` is in your config
- This enables SPA routing

**ONNX file not loading:**

- Check MIME type: should be `application/octet-stream`
- Verify CORS headers if loading from different domain

**No compression:**

- Check `curl -H "Accept-Encoding: gzip" -I http://localhost/model/model.onnx`
- Ensure `gzip on;` is in nginx.conf
- Restart nginx: `sudo systemctl restart nginx`

## Optional: systemd Service

Create `/etc/systemd/system/word-diffusion.service`:

```ini
[Unit]
Description=Word Diffusion Website
After=network.target

[Service]
Type=oneshot
ExecStart=/bin/true
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

Enable on boot:

```bash
sudo systemctl enable word-diffusion
```
