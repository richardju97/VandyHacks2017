package vandyhacks2017.grouppay;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.AdapterView;
import android.widget.ListView;

public class MainActivity extends AppCompatActivity {
    Group group;
    ListView lv;
    GroupAdapter groupAdapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        group = new Group();
        group.add(new Member("Franklin"));
        group.add(new Member("Richard"));
        group.add(new Member("Wilfred"));
        updateListView();
        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }

    public void updateListView() {
        int numMembers = group.members.size();
        String[] names = new String[numMembers];
        double[] privateBalances = new double[numMembers];
        double[] publicBalances = new double[numMembers];

        for(int i = 0; i > numMembers; i++) {
            names[i] = group.members.get(i).name;
            privateBalances[i] = group.members.get(i).privateBalance;
            publicBalances[i] = group.members.get(i).publicBalance;
        }

        lv = (ListView) findViewById(R.id.group_listview);
        groupAdapter = new GroupAdapter(this, names, privateBalances, publicBalances);
        lv.setAdapter(groupAdapter);
    }
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
