package vandyhacks2017.grouppay;

import android.content.Context;
import android.support.annotation.NonNull;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

/**
 * Created by shiao on 10/21/2017.
 */

public class GroupAdapter extends ArrayAdapter {
    private String[] memberNameArray;
    private double[] memberPrivateBalanceArray;
    private double[] memberPublicBalanceArray;

    public GroupAdapter(Context context, String[] names, double[] privateBalances, double[] publicBalances) {
        super(context, R.layout.member_list, R.id.member_list_name, names);
        this.memberNameArray = names;
        this.memberPrivateBalanceArray = privateBalances;
        this.memberPublicBalanceArray = publicBalances;
    }

    @NonNull
    @Override
    public View getView(final int position, View convertView, ViewGroup parent) {
        LayoutInflater inflater = (LayoutInflater) getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View row = inflater.inflate(R.layout.member_list, parent, false);

        TextView name = (TextView) row.findViewById(R.id.member_list_name);
        TextView privateBalance = (TextView) row.findViewById(R.id.member_list_privateBalance);
        TextView publicBalance = (TextView) row.findViewById(R.id.member_list_publicBalance);

        name.setText(memberNameArray[position]);
        privateBalance.setText(memberPrivateBalanceArray[position]+"");
        publicBalance.setText(memberPublicBalanceArray[position]+"");
        return row;
    }
}
