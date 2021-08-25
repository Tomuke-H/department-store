class ItemsController < ApplicationController

    def index
        render component: "Items", props: {dep: @dep}
    end

    private
    def set_dep
        @dep = Department.find(params[department_id])
    end
end
