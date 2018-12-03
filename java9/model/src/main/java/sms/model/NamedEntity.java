package sms.model;

public abstract class NamedEntity extends Entity{
    protected String name;

    public NamedEntity() {
    }

    public NamedEntity(String id,String name) {
        super(id);
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
