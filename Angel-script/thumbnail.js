function getThumbnail() {
            const videoUrl = document.getElementById('videoUrl').value;
            const videoId = extractVideoId(videoUrl);
            const thumbnailContainer = document.getElementById('thumbnailContainer');
            
            if (videoId) {
                const sizes = [
                    { name: 'Small', quality: 'default' },
                    { name: 'Medium', quality: 'mqdefault' },
                    { name: 'Large', quality: 'hqdefault' }
                ];

                let html = '';
                sizes.forEach(size => {
                    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${size.quality}.jpg`;
                    html += `
                        <div class="col-md-4 thumbnail-container">
                            <h3>${size.name}</h3>
                            <img src="${thumbnailUrl}" alt="${size.name} Thumbnail" class="img-fluid">
                            <a href="${thumbnailUrl}" class="btn btn-success btn-sm" download>Download ${size.name}</a>
                        </div>
                    `;
                });

                thumbnailContainer.innerHTML = html;
            } else {
                thumbnailContainer.innerHTML = '';
            }
        }

        function extractVideoId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            const match = url.match(regExp);
            return (match && match[2].length === 11) ? match[2] : null;
        }