            {/*             {links.forEach((item) => {
              <ListItem component={Link} to={item.link}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={item.ru} />
              </ListItem>;
            })}
            ; */}


            <ListItem button component={Link} to="/home">
              <ListItemIcon>
                <InboxIcon color="secondary" />
              </ListItemIcon>
              {/* <ListItemText primary={links[0].ru} /> */}
              <ListItemText primary="Главная" />
            </ListItem>

            <ListItem button component={Link} to="/newgame">
              <ListItemIcon>
                <InboxIcon style={{ color: orange[900] }} />
              </ListItemIcon>
              {/* <ListItemText primary={links[1].ru} /> */}
              <ListItemText primary="Новая игра" />
            </ListItem>

            <ListItem button component={Link} to="/newgame">
              <ListItemIcon>
                <MailIcon color="primary" />
              </ListItemIcon>
              {/* <ListItemText primary={links[2].ru} /> */}
              <ListItemText primary="Продолжить" />
            </ListItem>

            <ListItem button component={Link} to="/manual">
              <ListItemIcon>
                <InboxIcon style={{ color: amber[400] }} />
              </ListItemIcon>
              {/* <ListItemText primary={links[3].ru} /> */}
              <ListItemText primary="Инструкция" />
            </ListItem>

            <ListItem button component={Link} to="/settings">
              <ListItemIcon>
                <MailIcon style={{ color: lightBlue[800] }} />
              </ListItemIcon>
              {/* <ListItemText primary={links[4].ru} /> */}
              <ListItemText primary="Настройки" />
            </ListItem>

            <ListItem button component={Link} to="/information">
              <ListItemIcon>
                <InboxIcon style={{ color: teal[800] }} />
              </ListItemIcon>
              {/* <ListItemText primary={links[5].ru} /> */}
              <ListItemText primary="О разработчиках" />
            </ListItem>




<Switch>
<Route exact path="/home" component={Home} />
<Route exact path="/newgame" component={NewGame} />
{/* <Route exact path='/game'" component={} /> */}
<Route exact path="/manual" component={Manual} />
<Route exact path="/settings" component={Settings} />
<Route exact path="/information" component={Information} />
<Redirect from="/" to="/home" />
</Switch>



      {/*       <Checkbox
        name="theme"
        onChange={() => {
          if (window.localStorage.getItem('theme') === 'dark') {
            window.localStorage.setItem('theme', 'light');
            window.location.reload();
          } else {
            window.localStorage.setItem('theme', 'dark');
            window.location.reload();
          }
        }}
        checked={window.localStorage.getItem('theme') === 'dark'}
        text="⭐Темная тема"
      /> */}

      const keyPressHandler = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          console.log(ref.current);
          /* clickLight(); */
        }
        if (event.key === 'Del') {
          console.log('key Del');
          /* clickDark(); */
        }
      };
  /* const [theme, setTheme] = useState<string>('light'); */
  const ref = useRef(null);

  $ git pull origin menu
  From https://github.com/ElenaNam/RS-Clone
   * branch            menu       -> FETCH_HEAD
  Auto-merging .eslintcache
  CONFLICT (content): Merge conflict in .eslintcache
  Automatic merge failed; fix conflicts and then commit the result.