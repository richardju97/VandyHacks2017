package vandyhacks2017.grouppay;

import java.util.List;

/**
 * Created by shiao on 10/21/2017.
 */

public class Member {
    double privateBalance;
    double publicBalance;
    String name;
    Group group;
    List<String> inventory;

    public Member(String name) {
        this.name = name;
        this.privateBalance = 0;
        this.publicBalance = 0;
    }

    public void privateBalanceAdd(double val) {
        this.privateBalance += val;
    }

    public void publicBalanceAdd(double val) {
        this.publicBalance += val;
    }
}
