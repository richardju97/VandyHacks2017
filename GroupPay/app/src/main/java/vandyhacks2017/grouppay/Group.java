package vandyhacks2017.grouppay;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by shiao on 10/21/2017.
 */

public class Group {
    List<Member> members;
    public Group(){
        members = new ArrayList<>();
    }

    public void add(Member member) {
        members.add(member);
    }
}
