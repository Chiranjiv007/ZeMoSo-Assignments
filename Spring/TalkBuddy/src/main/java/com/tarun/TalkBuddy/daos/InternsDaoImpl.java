package com.tarun.TalkBuddy.daos;

import com.tarun.TalkBuddy.model.Intern;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class InternsDaoImpl implements InternsDao {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Intern> list() {
        Session currentSession = sessionFactory.getCurrentSession();
        return currentSession.createQuery("from Intern",Intern.class).getResultList();
    }

    @Override
    public Optional<Intern> find(Long key) {

        Session currentSession = sessionFactory.getCurrentSession();
        return Optional.ofNullable(currentSession.get(Intern.class,key));
    }



    @Override
    public boolean remove(Long key) {
        try {
            Session currentSession = sessionFactory.getCurrentSession();
            currentSession.remove(find(key));
            return true;
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public boolean remove(Intern entry) {
        try {
            Session currentSession = sessionFactory.getCurrentSession();
            currentSession.remove(entry);
            return true;
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public Intern save(Intern entry) {
        try {
            Session currentSession = sessionFactory.getCurrentSession();
            currentSession.save(entry);
            return entry;
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return null;
    }
}
