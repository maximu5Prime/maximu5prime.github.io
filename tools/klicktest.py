"""Startet einen Server für den Klicktest und macht einen Screenshot des Ergebnisses.
Aufruf aus dem Repo-Root:  python tools/klicktest.py /m11/funktionsbegriff/ /m12/aenderungsrate/ …
(ohne Seiten: alle Seiten mit #ueben). Ergebnis: klicktest.png im aktuellen Verzeichnis."""
import functools, glob, http.server, os, subprocess, sys, tempfile, threading

seiten = sys.argv[1:] or sorted('/' + p[:-len('index.html')] for p in glob.glob('*/*/index.html')
                                if 'id="ueben"' in open(p, encoding='utf8').read() or 'class="etappe"' in open(p, encoding='utf8').read())
class Leise(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
class Server(http.server.ThreadingHTTPServer):
    def handle_error(self, *a): pass          # abgebrochene Video-Downloads
srv = Server(('127.0.0.1', 8125), functools.partial(Leise, directory='.'))
threading.Thread(target=srv.serve_forever, daemon=True).start()
url = 'http://127.0.0.1:8125/tools/klicktest.html?s=' + ','.join(seiten)
with tempfile.TemporaryDirectory() as profil:
    subprocess.run(['firefox', '--headless', '--profile', profil, '--window-size=1300,900', '--screenshot', os.path.abspath('klicktest.png'), url],
                   timeout=120, capture_output=True)
srv.shutdown()
print('klicktest.png geschrieben für', len(seiten), 'Seiten')
