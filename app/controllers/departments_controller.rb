class DepartmentsController < ApplicationController
    before_action :set_dep, only:[:show, :edit]
    def index
        render component: "Deps", props: {deps: Department.all}
    end

    def show
        render component: "Dep", props: {dep: @dep}
    end

    def new
        render component: "DepNew"
    end

    def edit
        render component: "DepEdit"
    end


    private

    def dep_params
        require
    end

    def set_dep
        @dep = Department.find(params[:id])
    end
end
