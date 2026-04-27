@echo off
cd /d "C:\Users\salva\Documents\GitHub\Filmita"
git add data/films.json
git commit -m "feat: add 7 Italian films from YouTube discovery

- Don Camillo monsignore ma non troppo (1961, Comencini)
- Il Marchese del Grillo (1981, Monicelli)
- Dracula 3D (2012, Argento)
- La banda Vallanzasca (1977, Castellari)
- Viaggi di nozze (1995, Verdone)
- Porca Vacca (1982, Pozzetto)
- Lo chiamavano Bulldozer (1978, Lupo)

All candidates marked as semiverificato pending direct player verification.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
git push origin main
echo Commit and push completed!
pause
